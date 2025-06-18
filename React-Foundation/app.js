//  <div id="container">
//             <div id="container-content1">
//                 <h1>Header-01</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusantium.</p>
//             </div>
//              <div id="container-content2">
//                 <h1>Header-02</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusantium.</p>
//             </div>
// </div>


const Container = React.createElement("div",{id:"container-header1"},
    [
        React.createElement("h1",{}, "Header-01"),
        React.createElement("p",{}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusantium")
    ],
    [
        React.createElement("h1",{}, "Header-02"),
        React.createElement("p",{}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, accusantium")
    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Container);