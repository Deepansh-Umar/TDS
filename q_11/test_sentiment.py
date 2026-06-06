import sys
import os

# Add local directory to path
sys.path.append(os.path.abspath(os.path.dirname(__file__)))

from solve import predict_sentiment_rule_based

test_cases = [
    ("I love this product!", "happy"),
    ("This is terrible.", "sad"),
    ("The meeting is at 3 PM.", "neutral"),
    ("I do not like this.", "sad"),
    ("It's not bad.", "happy"),
    ("I had a great day today.", "happy"),
    ("I failed my exam, so unhappy.", "sad"),
    ("The package arrived on Monday.", "neutral"),
    ("Nothing special about this book.", "neutral"),
    ("She was thrilled about the new opportunity!", "happy"),
    ("This item sucks.", "sad"),
    ("I enjoyed the dinner very much.", "happy"),
    ("There is a tree in the garden.", "neutral"),
    ("This is not happy news.", "sad"),
]

def run_tests():
    passed = 0
    total = len(test_cases)
    
    print("Running rule-based sentiment classifier tests...")
    print("-----------------------------------------------")
    
    for sentence, expected in test_cases:
        actual = predict_sentiment_rule_based(sentence)
        status = "PASS" if actual == expected else "FAIL"
        if actual == expected:
            passed += 1
        print(f"[{status}] Sentence: '{sentence}'")
        print(f"       Expected: {expected}, Got: {actual}\n")
        
    accuracy = (passed / total) * 100
    print("-----------------------------------------------")
    print(f"Results: {passed}/{total} passed ({accuracy:.2f}%)")
    
    if accuracy >= 80.0:
        print("Test Suite Passed successfully!")
    else:
        print("Warning: Accuracy is below 80%!")

if __name__ == "__main__":
    run_tests()
