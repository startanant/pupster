import React from 'react';


function DiscoverPage() {
    const discoverStyle = {
        imageWrapper: {
            margin: '0 auto',
            width: '40vw',
            position: 'relative' },
        imageLike: {position: 'absolute', left: '20px', bottom: '50px'},
        imageDislike: {position: 'absolute', left: '20px', bottom: '50px'},
        alert: {display: 'none'}
    }
  return (
    <div >
      <div class="container text-center">
          <h1>Make new friends</h1>
          <h2>Thumbs up on any pups you like to meet </h2>

            <div style={discoverStyle.imageWrapper}>
          <img src="https://i.pinimg.com/originals/be/da/86/beda8664f4608ebeb54697a61d5121c2.jpg" 
          alt="..." class="img-thumbnail" ></img>
            <button class="btn btn-lg btn-success"
                style={discoverStyle.imageLike}>
                <i class="fas fa-thumbs-up"></i>
            </button>
            <button class="btn btn-lg btn-danger"
                style={discoverStyle.imageDislike}>
                <i class="fas fa-thumbs-down"></i>
            </button>
          </div>

          <h1>Made friends with 1000 pups so far!</h1>
          <div class="alert alert-success" role="alert" style={discoverStyle.alert}>
              You and puppy are now friends
          </div>
      </div>
    </div>
  );
}

export default DiscoverPage;