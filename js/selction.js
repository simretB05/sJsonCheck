let user_selection = Cookies.get(`user_selection`);
let selection_data = JSON.parse(user_selection );

console.log( selection_data[`title`] )


if ( selection_data === undefined )
{
    document.body.insertAdjacentHTML( `afterbegin`, `<h3>Error Please go back to home page and select a color </h3>` )

} else
{
    document.body.insertAdjacentHTML( `afterbegin`, `<section><img  style="width:500px; height:500px"src="${selection_data[`image_url`]}</section><div style="width:500px; height:500px; display:grid; place-items:center;  background-color:"><h1>${selection_data[`title`]}</h1><p>${selection_data[`description`]}</p></div>` )

}
function delete_color( details )
{
Cookies.remove( `chosen_color` );
}
let delete_button = document.querySelector( `.delet_btn` );
delete_button.addEventListener(`click`, delete_color)
