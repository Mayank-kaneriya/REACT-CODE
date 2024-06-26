function customRender(reactElement,Container)
{

    // const domElement=document.createElement(reactElement.type);
    // domElement.innerHTML=reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    // Container.appendChild(domElement);

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    
    for (let prop in reactElement.props)
    {
        domElement.setAttribute(prop,reactElement.props[prop]);

    }
    Container.appendChild(domElement);


   

}



const reactElement={
    type:'a',
    props: {
        href:'https://google.com',
        target: '_blank'
    },
    children:'click me to visit google'
}

const mainContainer=document.getElementById("root");

customRender(reactElement,mainContainer);

