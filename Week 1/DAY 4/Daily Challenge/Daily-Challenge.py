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
        return "\n".join(self.get_visible_items())  # Join the items on the current page with newlines


# Testing the Pagination class
alphabetList = list("abcdefghijklmnopqrstuvwxyz")  # Create a list of alphabet letters
p = Pagination(alphabetList, 4)  # Create a Pagination object with a page size of 4

# Testing get_visible_items
print(p.get_visible_items())  # Output: ['a', 'b', 'c', 'd']

# Testing next_page
p.next_page()  # Move to the next page
print(p.get_visible_items())  # Output: ['e', 'f', 'g', 'h']

# Testing last_page
p.last_page()  # Move to the last page
print(p.get_visible_items())  # Output: ['y', 'z']

# Testing go_to_page
p.go_to_page(10)  # Move to the 10th page
print(p.current_idx + 1)  # Output: 7 (1-based index)

# Testing go_to_page with invalid input (should raise ValueError)
try:
    p.go_to_page(0)  # Invalid page number
except ValueError as e:
    print(e)  # Output: Page number out of range.

# Testing first_page and previous_page
p.first_page()  # Move to the first page
print(p.get_visible_items())  # Output: ['a', 'b', 'c', 'd']

p.previous_page()  # Try to go to the previous page (it should stay on the first page)
print(p.get_visible_items())  # Output: ['a', 'b', 'c', 'd']

# Testing __str__ method
print(str(p))  # Output: a\nb\nc\nd

# Testing edge cases
p.last_page()  # Go to last page
p.next_page()  # Try to go past last page (should stay on last page)
print(p.get_visible_items())  # Output: ['y', 'z']

p.first_page()  # Go to first page
p.previous_page()  # Try to go before first page (should stay on first page)
print(p.get_visible_items())  # Output: ['a', 'b', 'c', 'd']

# Test go_to_page with various inputs
try:
    p.go_to_page(-1)  # Invalid negative page
except ValueError as e:
    print(e)  # Output: Page number out of range.

try:
    p.go_to_page(100)  # Invalid large page number
except ValueError as e:
    print(e)  # Output: Page number out of range.

p.go_to_page(2)  # Valid page number
print(p.get_visible_items())  # Output: ['e', 'f', 'g', 'h']


