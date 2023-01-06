function match(first, second)
{
    if (first.length == 0 && second.length == 0)
        return true;

    if (first.length > 1 && first[0] == '*' &&
        second.length == 0)
        return false;

    if ((first.length > 1 && first[0] == '?') ||
        (first.length != 0 && second.length != 0 &&
        first[0] == second[0]))
        return match(first.substring(1),
                    second.substring(1));

    if (first.length > 0 && first[0] == '*')
        return match(first.substring(1), second) ||
            match(first, second.substring(1));

    return false;
}

function test(first, second)
{
    if (match(first, second))
    document.write("true" + "<br>");
    else
    document.write("false" + "<br>");
}

test("a", "aa"); 
test("*", "a"); 
test("*b", "aab"); 
test("*c*", "aabcde"); 
test("*c", "aabcde");
test("?a", "cd"); 

