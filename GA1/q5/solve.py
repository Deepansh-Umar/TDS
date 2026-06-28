import os
import re
import shutil
import hashlib
import sys

sys.stdout.reconfigure(encoding='utf-8')

base_dir = os.path.abspath("GA1/q5/extracted")

# 1. Walk through the directory and find all .txt files
txt_files = []
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".txt"):
            txt_files.append(os.path.join(root, file))

print(f"Found {len(txt_files)} text files.")

# Reorganize files
moves = []
for file_path in txt_files:
    # Get relative path from base_dir
    rel_path = os.path.relpath(file_path, base_dir)
    # Replace backward slashes with forward slashes for cross-platform consistency
    rel_path_fwd = rel_path.replace(os.path.sep, "/")
    
    # Read the first line matching "^category:"
    category = None
    with open(file_path, "r", encoding="utf-8") as f:
        for line in f:
            match = re.match(r"^category:\s*(.*)", line)
            if match:
                category = match.group(1).strip()
                break
    
    if not category:
        print(f"Warning: category not found in {file_path}")
        continue
        
    # The new filename is the relative path with slashes replaced by dashes
    new_filename = rel_path_fwd.replace("/", "-")
    
    # Create the category directory
    dest_dir = os.path.join(base_dir, category)
    os.makedirs(dest_dir, exist_ok=True)
    
    dest_path = os.path.join(dest_dir, new_filename)
    moves.append((file_path, dest_path))

# Execute the moves
for src, dst in moves:
    shutil.move(src, dst)
    print(f"Moved: {os.path.basename(src)} -> {os.path.relpath(dst, base_dir)}")

# Clean up empty directories and README.md
for root, dirs, files in os.walk(base_dir, topdown=False):
    for file in files:
        file_p = os.path.join(root, file)
        if file == "README.md":
            os.remove(file_p)
            print("Removed README.md")
    for name in dirs:
        dir_p = os.path.join(root, name)
        if not os.listdir(dir_p):
            os.rmdir(dir_p)
            print(f"Removed empty dir: {os.path.relpath(dir_p, base_dir)}")

# Now generate the file list like `find . -type f | LC_ALL=C sort`
final_files = []
for root, dirs, files in os.walk(base_dir):
    for file in files:
        full_path = os.path.join(root, file)
        rel_path = os.path.relpath(full_path, base_dir)
        # Use forward slashes
        rel_path_fwd = rel_path.replace(os.path.sep, "/")
        final_files.append(f"./{rel_path_fwd}")

# Sort using byte-by-byte ascii sort (LC_ALL=C)
# Python's default sort on strings is lexicographical (based on unicode code points),
# which matches character-by-character ASCII sorting.
final_files.sort()

# Join with newlines and add a trailing newline
file_list_str = "\n".join(final_files) + "\n"

# Print the file list for verification
print("\n--- Sorted File List ---")
print(file_list_str)

# Calculate SHA-256
sha256 = hashlib.sha256(file_list_str.encode("utf-8")).hexdigest()
print("SHA-256 Hash:")
print(sha256)
