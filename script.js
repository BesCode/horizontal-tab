const lists = document.querySelectorAll("li");
const title = document.querySelector(".title");
const content = document.querySelector(".content");
const image = document.querySelector(".image");
const contentArrays = [
    {
        title: "Home",
        content: "lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sapiente nostrum repudiandae, eligendi autem inventore ipsa? Voluptatibus, quibusdam debitis neque nam aliquam commodi sequi ipsum laudantium aliquid modi amet obcaecat Beatae veniam ipsa sit hic cum enim sint quod voluptas maiores, quos sunt rerum, et laboriosam repudiandae dolore! At dolor praesentium optio quasi fugit voluptatum quas cum totam vero fuga? Dolorum sit endi beatae vero, temporibus ipsam officiis aspernatur molestiae voluptatum nesciunt facilis tenetur. Totam aut cupiditate suscipit reiciendis neque? Facere, veniam repreodi deserunt Ipsum, vitae voluptates soluta",
        image: "/"
    },

    {
        title: "Blog",
        content: "lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sapiente nostrum repudiandae, eligendi autem inventore ipsa? Voluptatibus, quibusdam debitis neque nam aliquam commodi sequi ipsum laudantium aliquid modi amet obcaecat Beatae veniam ipsa sit hic cum enim sint quod voluptas maiores, quos sunt rerum, et laboriosam repudiandae dolore! At dolor praesentium optio quasi fugit voluptatum quas cum totam vero fuga? Dolorum sit endi beatae vero, temporibus ipsam officiis aspernatur molestiae voluptatum nesciunt facilis tenetur. Totam aut cupiditate suscipit reiciendis neque? Facere, veniam repreodi deserunt Ipsum, vitae voluptates soluta",
        image: "/"
    },

    {
        title: "Help",
        content: "lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sapiente nostrum repudiandae, eligendi autem inventore ipsa? Voluptatibus, quibusdam debitis neque nam aliquam commodi sequi ipsum laudantium aliquid modi amet obcaecat Beatae veniam ipsa sit hic cum enim sint quod voluptas maiores, quos sunt rerum, et laboriosam repudiandae dolore! At dolor praesentium optio quasi fugit voluptatum quas cum totam vero fuga? Dolorum sit endi beatae vero, temporibus ipsam officiis aspernatur molestiae voluptatum nesciunt facilis tenetur. Totam aut cupiditate suscipit reiciendis neque? Facere, veniam repreodi deserunt Ipsum, vitae voluptates soluta",
        image: "/"
    },

    {
        title: "Code",
        content: "lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sapiente nostrum repudiandae, eligendi autem inventore ipsa? Voluptatibus, quibusdam debitis neque nam aliquam commodi sequi ipsum laudantium aliquid modi amet obcaecat Beatae veniam ipsa sit hic cum enim sint quod voluptas maiores, quos sunt rerum, et laboriosam repudiandae dolore! At dolor praesentium optio quasi fugit voluptatum quas cum totam vero fuga? Dolorum sit endi beatae vero, temporibus ipsam officiis aspernatur molestiae voluptatum nesciunt facilis tenetur. Totam aut cupiditate suscipit reiciendis neque? Facere, veniam repreodi deserunt Ipsum, vitae voluptates soluta",
        image: "/"
    },

    {
        title: "About",
        content: "lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sapiente nostrum repudiandae, eligendi autem inventore ipsa? Voluptatibus, quibusdam debitis neque nam aliquam commodi sequi ipsum laudantium aliquid modi amet obcaecat Beatae veniam ipsa sit hic cum enim sint quod voluptas maiores, quos sunt rerum, et laboriosam repudiandae dolore! At dolor praesentium optio quasi fugit voluptatum quas cum totam vero fuga? Dolorum sit endi beatae vero, temporibus ipsam officiis aspernatur molestiae voluptatum nesciunt facilis tenetur. Totam aut cupiditate suscipit reiciendis neque? Facere, veniam repreodi deserunt Ipsum, vitae voluptates soluta",
        image: "/"
    },

];

lists.forEach((list)=>{
    list.addEventListener("click", handleList);
})

function  removeActiveList(){
    lists.forEach((list)=>{
        list.classList.remove("active");
    })
}

function handleList(e){
    removeActiveList()

    list.classList.add("active")

    contentArrays.forEach((contentArray)=>{
        if(contentArray.title === this.innerText){
            title.innerText = contentArray.title;
            content.innerText = contentArray.content;
            image.src = contentArray.image;
        }
    });

}