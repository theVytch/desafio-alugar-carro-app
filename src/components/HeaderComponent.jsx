import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a href="#/" style={{marginLeft:"120px"}}  class="navbar-brand text-white">Desafio</a>
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="http://localhost:3000/veiculos">Carros</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="http://localhost:3000/alugarVeiculos">Carros alugados</a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;