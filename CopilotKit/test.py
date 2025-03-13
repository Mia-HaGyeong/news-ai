def solution(progresses, speeds):
    lt = []
    for idx in range(len(speeds)):
        x, y = divmod((100-progresses[idx]), speeds[idx])
        if y != 0:
            x += 1
        lt.append(x)

    answer = []
    count = 1
    for idx in range(1, len(lt)):
        if lt[idx-1] >= lt[idx]:
            count += 1
        else:
            answer.append(count)
            count = 1
    answer.append(count)
    return answer


print(solution([93, 30, 55], [1, 30, 5]))
print(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))