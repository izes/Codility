def solution(N):
    # Implement your solution here
    count = 0
    max_count = 0

    for i in bin(N)[2:]:
        if i == '0':
            count += 1
        else:
            max_count = max(count, max_count)
            count = 0
            
    return max_count