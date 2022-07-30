let model = {
    currentCard: {},
    data: [

        {
            id: "CaptainAmerica",
            img: "https://static.wikia.nocookie.net/marvelmovies/images/f/fa/Captain_America_Avengers_Endgame.jpg/revision/latest?cb=20190526165913",
            name: "Captain America",
            counter: 0,
            counter_id: "CaptainAmericaCounter",
        }
        ,
        {
            id: "CaptainMarvel",
            img: "https://static.wikia.nocookie.net/marvelmovies/images/4/45/Endgame_Character_Posters_15.jpg/revision/latest/scale-to-width-down/675?cb=20190326174513",
            name: "Captain Marvel",
            counter: 0,
            counter_id: "CaptainMarvelCounter",

        }
        ,
        {
            id: "Hulk",
            img: "https://static.wikia.nocookie.net/marvelmovies/images/f/ff/Smart_Hulk_Endgame.png/revision/latest/scale-to-width-down/700?cb=20200102213242",
            name: "Hulk",
            counter: 0,
            counter_id: "HulkCounter",
        }
        ,
        {
            id: "BlackWidow",
            img: "https://static.wikia.nocookie.net/marvelmovies/images/0/06/Black_Widow_2021_Character_Posters_01.jpg/revision/latest/scale-to-width-down/666?cb=20210510164054",
            name: "Black Widow",
            counter: 0,
            counter_id: "BlackWidowCounter",


        }
        ,
        {

            id: "SpiderMan",
            img: "https://static.wikia.nocookie.net/marvelmovies/images/3/32/EW_Spider-Man_No_Way_Home_Guide.jpg/revision/latest/scale-to-width-down/700?cb=20211203175850",
            name: "Spider Man",
            counter: 0,
            counter_id: "SpiderManCounter",

        }

    ],




}

let view = {
    init: function () {
        this.changeCurrentCard()
        $(".imgs_container .img").on("click", function () {
            view.updateCardCounter()
        })
        $(`#admin_mode_btn`).on("click", function () {
            
        })

    },
    membersList: $("#members_list"),
    currentCardElement: $(`#${model.currentCard.id}`),
    displayCurrentCard: function (element) {
        $(".imgs_container").html(
            `
            <div id="${element.id}">    
            <h2 class="card-title m-2">${element.name}</h2>
            <img src="${element.img}" class="card-img-top img " alt="...">
            <div class="card-body">
                <div class="card-text  counterTxt">
                    <h5 class=" ">Number of times this img was clicked : <span id="${element.counter_id}" > ${element.counter} </span></h5>
                    
                    
                </div>
            </div>
            </div>
           `

        )
    },
    displayMembersList: function () {
        model.data.forEach(function (member) {
            view.membersList.append(`<li  data-target=${member.id}>${member.name}</li>`)
        })

    },
    changeCurrentCard: function () {
        this.membersList.on("click", function (member) {
            let data_target = $(member.target).attr("data-target")
            controller.getAllCardObjects().forEach(function (card) {
                if (card.id === data_target) {
                    controller.setCurrentCard(card)
                    console.log(card)
                    view.displayCurrentCard(model.currentCard)

                    $(".imgs_container .img").on("click", function () {
                        view.updateCardCounter()
                    })
                }
            })


        })

    },
    updateCardCounter: function () {
        // console.log(model.currentCard)
        // // console.log($(`#${model.currentCard.id}`))
        // console.log( $(`#${controller.getCurrentCard().id}`).find(".img"))
        // $(`#${controller.getCurrentCard().id}`).find(".img").on("click",function(){
        //     controller.incrementCardCounter(controller.getCurrentCard())
        //     console.log(controller.getCurrentCard().counter)
        //     // view.displayCurrentCard(model.currentCard)

        // })

        let currentCard = controller.getCurrentCard()
        currentCard.counter += 1
        controller.setCurrentCard(currentCard)
        console.log(currentCard.counter, currentCard.counter_id)
        $(`#${currentCard.counter_id}`).html(`${currentCard.counter}`)


    },

}

let controller = {
    init: function () {
        this.setCurrentCard(model.data[0])
        view.displayMembersList()
        view.displayCurrentCard(this.getCurrentCard())
        view.init()

    },

    // mesh mot2keda hna wla f model?
    setCurrentCard: function (card) {
        model.currentCard = card
    },
    getCurrentCard: function () {
        return model.currentCard
    },
    // mesh mot2keda
    getAllCardObjects: function () {
        return model.data
    },
    // mesh mot2keda
    getMemberList: function () {
        return view.membersList
    },
    getCurretCardElement: function () {
        return view.currentCardElement
    },




}


// starts here
$("document").ready(
    controller.init(),
)

