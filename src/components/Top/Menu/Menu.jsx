import MenuCSS from './Menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Transition } from 'react-transition-group';

function Menu({ setOpen }) {

    const defaultStyle = {
        transition: 'transform 400ms ease-in',
        transform: 'translateX(-100%)',
    }

    const transitionStyles = {
        entering: { transform: 'translateX(0%)' },
        entered: { transform: 'translateX(0%)' },
        exiting: { transform: 'translateX(0%)' },
        exited: { transform: 'translateX(-100%)' },
    };

    let options = [
        { content: "Acesso à informação" },
        { content: "Política monetária" },
        { content: "Estabilidade financeira" },
        { content: "Estatísticas" },
        { content: "Cédulas e moedas" },
        { content: "Publicações e pesquisas" },
    ]

    return (
        // <div>
        //     <Transition>
        <div className={MenuCSS.menu}>
            <div className={MenuCSS.option}>
                <a className={MenuCSS.closeBtn} onClick={() => setOpen(false)}>
                    <p></p>
                    <FontAwesomeIcon icon={faTimes} />
                </a>
            </div>
            {options.map(item => <Option key={item.content} option={item} />)}
        </div>
        // </Transition>
        // </div>
    )
}

function Option(props) {
    return (
        <div className={MenuCSS.option}>
            <a href="#">
                <p>{props.option.content}</p>
                <FontAwesomeIcon icon={faChevronRight} />
            </a>
        </div>
    )
}

export default Menu;