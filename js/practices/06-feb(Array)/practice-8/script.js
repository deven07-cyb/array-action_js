function parseHTML(html) 
{
    const stack = [];
    const List = html.split('<');
    // console.log(List)
    List.shift();
    // console.log(List)

    for (let tag of List) 
    {
      let endIndex = tag.indexOf('>');
      // console.log(endTagIndex)
      let Name = tag.substring(0, endIndex);
      // console.log(tagName)
      if (!Name.includes('/'))
      {
        stack.push(Name);
      } 
      else 
      {
        Name = Name.replace('/', '');
        // console.log(Name)
        if (stack.length === 0 || stack[stack.length - 1] !== Name) 
        {
          return 'Invalid';
        } 
        else 
        {
          stack.pop();
        }
      }
    }
    return stack.length === 0 ? 'Valid' : 'Invalid';
}
  
  let html1 = "<html><head></head><body></body></html>";
  console.log(parseHTML(html1));
  let html2 = "<html><head></head></html>";
  console.log(parseHTML(html2));
