// level {1/2/3}
const obj = {
    liked: [
        { id: 1, name: "John Doe", age: 20 },
        { id: 2, name: "Jane Doe", age: 30 },
        { id: 3, name: "John Smith", age: 40 }
    ],
    disliked: [
        { id: 4, name: "Jason Doe", age: 20 },
        { id: 5, name: "Josh Doe", age: 30 },
        { id: 6, name: "Karen Smith", age: 40 }
    ],
    loved: [
        { id: 7, name: "Jasmine Doe", age: 20 },
        { id: 8, name: "Bob Doe", age: 30 },
        { id: 9, name: "Tom Smith", age: 40 }
    ]
}

const objNew = (obj) => {
    const liked = obj.liked;
    const disliked = obj.disliked;
    const loved = obj.loved;

    let updateLikedArr;
    let updateDislikedArr;
    let updateLovedArr;

    if (liked) {
        updateLikedArr = liked.map((li) => {
            return {
                ...li,
                reaction = 'liked'
            }
        })
    }

    if (disliked) {
        updateDislikedArr = disliked.map((li) => {
            return {
                ...li,
                reaction = 'disliked'
            }
        })
    }

    if (loved) {
        updateLovedArr = loved.map((li) => {
            return {
                ...li,
                reaction = 'loved'
            }
        })
    }

    const concated = [ ...updateLikedArr, ...updateDislikedArr, ...updateLovedArr ];
    return concated;
}