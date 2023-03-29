let selection = 
    {
    title: `lime-oil`,
    price: 27,
    image_url: `https://images.pexels.com/photos/932587/pexels-photo-932587.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    description:`lime oil has a very nice smell`
}
    
    // {
    // title: `pepper-mint oil`,
    // price: 27,
    // image_url: ``,
    // description: `lorem ddjddik`
    // },
    // {
    // title: `lavendar oil`,
    // price: 27,
    // image_url: ``,
    // description:` sjdhkjshkshifhioshksnj`
    // }


    let selection_json = JSON.stringify(selection);
    Cookies.set(`user_selection`, selection_json);
    