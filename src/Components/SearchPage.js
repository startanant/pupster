/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function SearchPage() {
  return (
    <div>
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Search</h1>
                <p class="text-muted lead">Please select the breed of dog</p>
                <form class="row">
                    <div class="col-10">
                        <input type="text" class="form-control" />
                    </div>
                    <div class="col-2">
                        <button class="btn btn-primary">Search</button>
                    </div>
                </form>
            </div>
        </section>

        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">

                    <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                            <img class="card-img-top" src="https://i.pinimg.com/originals/be/da/86/beda8664f4608ebeb54697a61d5121c2.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <p class="card-text">Cool doggy.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                        <img class="card-img-top" src="https://i.pinimg.com/originals/be/da/86/beda8664f4608ebeb54697a61d5121c2.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <p class="card-text">Cool doggy.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                        <img class="card-img-top" src="https://i.pinimg.com/originals/be/da/86/beda8664f4608ebeb54697a61d5121c2.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <p class="card-text">Cool doggy.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                        <img class="card-img-top" src="https://i.pinimg.com/originals/be/da/86/beda8664f4608ebeb54697a61d5121c2.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <p class="card-text">Cool doggy.</p>
                            </div>
                        </div>
                    </div>                                        
                </div>
            </div>
        </div>
    </div>
  );
}

export default SearchPage;