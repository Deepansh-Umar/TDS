import sys
import os

# Add api directory to sys.path so we can import from it
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "api")))

from index import execute_python_code, extract_lines_from_traceback, analyze_error_with_ai

def run_tests():
    print("--- Test 1: Successful Code ---")
    code_1 = """x = 5
y = 10
print(x + y)"""
    res1 = execute_python_code(code_1)
    print(f"Success: {res1['success']}")
    print(f"Output (repr): {repr(res1['output'])}")
    assert res1["success"] == True
    assert res1["output"] == "15\n"

    print("\n--- Test 2: Code with Division by Zero ---")
    code_2 = """x = 10
y = 0
result = x / y"""
    res2 = execute_python_code(code_2)
    print(f"Success: {res2['success']}")
    print("Traceback output:")
    print(res2["output"])
    assert res2["success"] == False
    assert 'File "", line 3, in' in res2["output"]

    print("\n--- Test 3: Code with Syntax Error ---")
    code_3 = """x = 10
y = 
result = x / y"""
    res3 = execute_python_code(code_3)
    print(f"Success: {res3['success']}")
    print("Syntax Error output:")
    print(res3["output"])
    assert res3["success"] == False
    assert 'File "", line 2' in res3["output"]

    print("\n--- Test 4: Regex Parsing Traceback Fallback ---")
    lines_div = extract_lines_from_traceback(res2["output"])
    print(f"Extracted lines for ZeroDivision: {lines_div}")
    assert lines_div == [3]

    lines_syntax = extract_lines_from_traceback(res3["output"])
    print(f"Extracted lines for SyntaxError: {lines_syntax}")
    assert lines_syntax == [2]

    print("\nAll tests passed successfully!")

if __name__ == "__main__":
    run_tests()
