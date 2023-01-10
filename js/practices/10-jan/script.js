function parseHTML(html) 
{
    const stack = [];
    for (let i = 0; i < html.length; i++)
    {
        if (html[i] === '<')                               
        {
            let j = i + 1;                                 
            while (html[j] !== '>')                         
            {
                j++;                                        
            }

            const tag = html.slice(i, j + 1);               

            if (tag[1] !== '/')                            
            {
                stack.push(tag);                            
            } 
            else 
            {
                const lastOpenTag = stack.pop();           
                if (lastOpenTag !== '<' + tag.slice(2))    
                {
                    return 'Invalid HTML FORMATE';
                }
            }
            i = j;
        }
    }
    if (stack.length === 0) 
    {
        return 'Valid HTML FORMATE';
    }
    return 'Invalid HTML FORMATE';
}

const html = 
`<html>
<head>
    <script src="script.js"></script>
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;

console.log(parseHTML(html));