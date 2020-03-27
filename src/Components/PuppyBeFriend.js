import React from 'react';


function PuppyBeFriend() {
    const puppyStyle = {
        imageWrapper: { 
            margin: '0 auto', 
            width: '40vw', 
            position: 'relative' },
        imageLike: { position: 'absolute', left: '20px', bottom: '50px', borderRadius: '50%' },
        imageDislike: { position: 'absolute', right: '20px', bottom: '50px', borderRadius: '50%' },
    }

  
    return (
        <div>
        <div style={puppyStyle.imageWrapper}>
        <img src="https://i.pinimg.com/originals/be/da/86/beda8664f4608ebeb54697a61d5121c2.jpg" 
        alt="..." class="img-thumbnail" ></img>
          <button class="btn btn-lg btn-success" style={puppyStyle.imageLike}><i class="fas fa-thumbs-up"></i></button>
            <button class="btn btn-lg btn-danger" style={puppyStyle.imageDislike}><i class="fas fa-thumbs-down"></i></button>
        </div>

        <h1>Made friends with 1000 pups so far!</h1>
        <div class="alert alert-success" role="alert" style={puppyStyle.alert}>
            You and puppy are now friends
        </div>
        </div>
  );
}

export default PuppyBeFriend;