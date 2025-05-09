import math  # Import the math module for mathematical operations

class Pagination:
    def __init__(self, items=None, page_size=10):
        # Initialize the items list and page size, with defaults if not provided
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0  # Default to the first page

        # Calculate the total number of pages based on the number of items and page size
        self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        """Return the items visible on the current page."""
        start = self.current_idx * self.page_size  # Calculate the start index for slicing
        end = start + self.page_size  # Calculate the end index for slicing
        return self.items[start:end]  # Return the items for the current page

    def go_to_page(self, page_num):
        """Go to the specified page number (1-based index)."""
        if page_num < 1 or page_num > self.total_pages:  # Check if the page number is valid
            raise ValueError("Page number out of range.")  # Raise an exception if invalid
        self.current_idx = page_num - 1  # Update the current page index (0-based)
        return self  # Return self for method chaining

    def first_page(self):
        """Go to the first page."""
        self.current_idx = 0  # Set current index to 0 for the first page
        return self  # Return self for method chaining

    def last_page(self):
        """Go to the last page."""
        self.current_idx = self.total_pages - 1  # Set current index to the last page
        return self  # Return self for method chaining

    def next_page(self):
        """Go to the next page, if not already on the last page."""
        if self.current_idx < self.total_pages - 1:  # Check if it's not the last page
            self.current_idx += 1  # Move to the next page
        return self  # Return self for method chaining

    def previous_page(self):
        """Go to the previous page, if not already on the first page."""
        if self.current_idx > 0:  # Check if it's not the first page
            self.current_idx -= 1  # Move to the previous page
        return self  # Return self for method chaining

    def __str__(self):
        """Return a string representation of the items on the current page."""
        try:
            return "\n".join(str(item) for item in self.get_visible_items())  # Convert all items to strings
        except Exception as e:
            return f"Error converting items to string: {str(e)}"


# Testing the Pagination class
def run_tests():
    # Create test data
    alphabetList = list("abcdefghijklmnopqrstuvwxyz")
    p = Pagination(alphabetList, 4)

    # Test 1: Basic page navigation
    print("Test 1: Basic page navigation")
    print("First page:", p.get_visible_items())  # Should show ['a', 'b', 'c', 'd']
    
    p.next_page()
    print("Second page:", p.get_visible_items())  # Should show ['e', 'f', 'g', 'h']
    
    p.last_page()
    print("Last page:", p.get_visible_items())  # Should show ['y', 'z']

    # Test 2: Edge cases
    print("\nTest 2: Edge cases")
    p.first_page()
    p.previous_page()  # Should stay on first page
    print("After trying to go before first page:", p.get_visible_items())
    
    p.last_page()
    p.next_page()  # Should stay on last page
    print("After trying to go past last page:", p.get_visible_items())

    # Test 3: Invalid page numbers
    print("\nTest 3: Invalid page numbers")
    try:
        p.go_to_page(0)  # Invalid page number
    except ValueError as e:
        print("Error with page 0:", e)
    
    try:
        p.go_to_page(10)  # Invalid page number (only 7 pages exist)
    except ValueError as e:
        print("Error with page 10:", e)

    # Test 4: Valid page navigation
    print("\nTest 4: Valid page navigation")
    p.go_to_page(2)  # Valid page number
    print("Page 2:", p.get_visible_items())  # Should show ['e', 'f', 'g', 'h']

    # Test 5: String representation
    print("\nTest 5: String representation")
    p.first_page()
    print("String representation of first page:")
    print(str(p))  # Should show a\nb\nc\nd

if __name__ == "__main__":
    run_tests()
