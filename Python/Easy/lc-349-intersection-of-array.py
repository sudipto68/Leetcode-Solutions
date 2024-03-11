def intersection(num1, num2):
    #Brute force solution
    # ans = set()
    # for i in range(len(num1)):
    #     for j in range(len(num2)):
    #         if num1[i] == num2[j]:
    #             ans.add(num1[i])
    # return list(ans)

    #simple optimal solution
    return list(set(num1) & set(num2))

print(intersection([4,9,5], [9,4,9,8,4]
))