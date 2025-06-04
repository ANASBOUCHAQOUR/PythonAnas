// Currency Converter Application
// ExchangeRate API configuration
const API_BASE_URL = 'https://v6.exchangerate-api.com/v6';
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key

// DOM Elements
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convertBtn');
const switchBtn = document.getElementById('switchBtn');
const resultContainer = document.getElementById('result');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');

// Application state
let supportedCurrencies = [];
let conversionRates = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the currency converter
async function initializeApp() {
    try {
        await loadSupportedCurrencies();
        setupEventListeners();
        setDefaultCurrencies();
    } catch (error) {
        showError('Failed to initialize the application. Please refresh the page.');
        console.error('Initialization error:', error);
    }
}

// Load supported currencies from the API
async function loadSupportedCurrencies() {
    try {
        showLoading(true);
        
        // Using the free tier endpoint - replace with your API key for more requests
        const response = await fetch(`${API_BASE_URL}/${API_KEY}/codes`);
        
        if (!response.ok) {
            // Fallback to demo data if API key is not set or invalid
            throw new Error('API request failed');
        }
        
        const data = await response.json();
        
        if (data.result === 'success') {
            supportedCurrencies = data.supported_codes;
            populateCurrencySelectors();
        } else {
            throw new Error(data['error-type'] || 'Unknown API error');
        }
    } catch (error) {
        console.warn('API call failed, using fallback currencies:', error);
        // Fallback to common currencies
        useFallbackCurrencies();
    } finally {
        showLoading(false);
    }
}

// Fallback currencies for demo purposes
function useFallbackCurrencies() {
    supportedCurrencies = [
        ['USD', 'United States Dollar'],
        ['EUR', 'Euro'],
        ['GBP', 'British Pound Sterling'],
        ['JPY', 'Japanese Yen'],
        ['AUD', 'Australian Dollar'],
        ['CAD', 'Canadian Dollar'],
        ['CHF', 'Swiss Franc'],
        ['CNY', 'Chinese Yuan'],
        ['SEK', 'Swedish Krona'],
        ['NZD', 'New Zealand Dollar'],
        ['MXN', 'Mexican Peso'],
        ['SGD', 'Singapore Dollar'],
        ['HKD', 'Hong Kong Dollar'],
        ['NOK', 'Norwegian Krone'],
        ['ILS', 'Israeli New Sheqel'],
        ['MAD', 'Moroccan Dirham']
    ];
    populateCurrencySelectors();
}

// Populate currency selector dropdowns
function populateCurrencySelectors() {
    const fromOptions = supportedCurrencies.map(([code, name]) => 
        `<option value="${code}">${code} - ${name}</option>`
    ).join('');
    
    const toOptions = supportedCurrencies.map(([code, name]) => 
        `<option value="${code}">${code} - ${name}</option>`
    ).join('');
    
    fromCurrencySelect.innerHTML = '<option value="">Select currency...</option>' + fromOptions;
    toCurrencySelect.innerHTML = '<option value="">Select currency...</option>' + toOptions;
}

// Set default currencies
function setDefaultCurrencies() {
    fromCurrencySelect.value = 'USD';
    toCurrencySelect.value = 'EUR';
    amountInput.value = '1';
    
    // Trigger initial conversion if default values are set
    if (fromCurrencySelect.value && toCurrencySelect.value && amountInput.value) {
        convertCurrency();
    }
}

// Setup event listeners
function setupEventListeners() {
    convertBtn.addEventListener('click', convertCurrency);
    switchBtn.addEventListener('click', switchCurrencies);
    
    // Auto-convert on input change
    amountInput.addEventListener('input', debounce(convertCurrency, 500));
    fromCurrencySelect.addEventListener('change', convertCurrency);
    toCurrencySelect.addEventListener('change', convertCurrency);
    
    // Allow Enter key to trigger conversion
    amountInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            convertCurrency();
        }
    });
}

// Convert currency using the API
async function convertCurrency() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = parseFloat(amountInput.value);
    
    // Validate inputs
    if (!fromCurrency || !toCurrency) {
        showResult('Please select both currencies');
        return;
    }
    
    if (!amount || amount <= 0) {
        showResult('Please enter a valid amount');
        return;
    }
    
    if (fromCurrency === toCurrency) {
        showResult(`${formatNumber(amount)} ${fromCurrency}`, `1 ${fromCurrency} = 1 ${toCurrency}`);
        return;
    }
    
    try {
        showLoading(true);
        hideError();
        
        // Use pair conversion endpoint with amount
        const response = await fetch(`${API_BASE_URL}/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        if (data.result === 'success') {
            const convertedAmount = data.conversion_result;
            const exchangeRate = data.conversion_rate;
            
            showResult(
                `${formatNumber(convertedAmount)} ${toCurrency}`,
                `1 ${fromCurrency} = ${formatNumber(exchangeRate)} ${toCurrency}`
            );
        } else {
            throw new Error(data['error-type'] || 'Conversion failed');
        }
    } catch (error) {
        console.error('Conversion error:', error);
        
        // Try fallback conversion with mock rates
        try {
            const mockResult = await mockConversion(fromCurrency, toCurrency, amount);
            showResult(
                `${formatNumber(mockResult.convertedAmount)} ${toCurrency}`,
                `1 ${fromCurrency} ≈ ${formatNumber(mockResult.rate)} ${toCurrency} (Demo rate)`
            );
        } catch (mockError) {
            showError('Unable to convert currency. Please check your internet connection and try again.');
        }
    } finally {
        showLoading(false);
    }
}

// Mock conversion for demo purposes
async function mockConversion(from, to, amount) {
    // Simple mock exchange rates for demonstration
    const mockRates = {
        'USD': { 'EUR': 0.85, 'GBP': 0.73, 'JPY': 110, 'ILS': 3.7, 'MAD': 10.2 },
        'EUR': { 'USD': 1.18, 'GBP': 0.86, 'JPY': 129, 'ILS': 4.35, 'MAD': 12.0 },
        'GBP': { 'USD': 1.37, 'EUR': 1.16, 'JPY': 150, 'ILS': 5.05, 'MAD': 13.9 },
        'ILS': { 'USD': 0.27, 'EUR': 0.23, 'GBP': 0.20, 'MAD': 2.75 },
        'MAD': { 'USD': 0.098, 'EUR': 0.083, 'GBP': 0.072, 'ILS': 0.36 }
    };
    
    const rate = mockRates[from]?.[to] || 1;
    return {
        convertedAmount: amount * rate,
        rate: rate
    };
}

// Switch currencies
function switchCurrencies() {
    const fromValue = fromCurrencySelect.value;
    const toValue = toCurrencySelect.value;
    
    if (fromValue && toValue) {
        fromCurrencySelect.value = toValue;
        toCurrencySelect.value = fromValue;
        
        // Trigger conversion with switched currencies
        convertCurrency();
    }
}

// Show conversion result
function showResult(amount, rate = '') {
    resultContainer.classList.add('updating');
    
    setTimeout(() => {
        if (rate) {
            resultContainer.innerHTML = `
                <div>
                    <div class="result-amount">${amount}</div>
                    <div class="result-rate">${rate}</div>
                </div>
            `;
        } else {
            resultContainer.innerHTML = `<div class="result-text">${amount}</div>`;
        }
        
        resultContainer.classList.remove('updating');
    }, 150);
}

// Show/hide loading state
function showLoading(show) {
    if (show) {
        loadingElement.classList.remove('hidden');
        convertBtn.disabled = true;
    } else {
        loadingElement.classList.add('hidden');
        convertBtn.disabled = false;
    }
}

// Show error message
function showError(message) {
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
}

// Hide error message
function hideError() {
    errorElement.classList.add('hidden');
}

// Format number with appropriate decimal places
function formatNumber(num) {
    if (num >= 1) {
        return num.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    } else {
        return num.toLocaleString(undefined, {
            minimumFractionDigits: 4,
            maximumFractionDigits: 6
        });
    }
}

// Debounce function to limit API calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle API key setup
function checkApiKey() {
    if (API_KEY === 'YOUR_API_KEY_HERE') {
        console.warn('Please set your ExchangeRate API key in script.js for full functionality');
        showError('Demo mode: Using sample exchange rates. Get your free API key at exchangerate-api.com for real-time rates.');
    }
}

// Check API key on load
document.addEventListener('DOMContentLoaded', checkApiKey);