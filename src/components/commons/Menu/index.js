import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper.js';
import { Logo } from '../../../theme/Logo'

export default function Menu(props) {
    const links = [
        {
            texto: "Home",
            url: "/",
        },
        {
            texto: "Perguntas Frequentes",
            url: "/faq",
        },
        {
            texto: "Sobre",
            url: "/sobre",
        },
    ];

    return (
        <MenuWrapper>
            <MenuWrapper.Left>
                <Logo />
            </MenuWrapper.Left>
            <MenuWrapper.Central>
                {links.map(function (link) {
                    return (
                        <li>
                            <a href={link.url}>
                                {link.texto}
                            </a>
                        </li>
                    )
                    }
                )}       
            </MenuWrapper.Central>
            <MenuWrapper.Right>
                <button>Entrar</button>
                <button>Cadastrar</button>
            </MenuWrapper.Right>
        </MenuWrapper>
    );
}
