import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
class Directory extends React.Component{
    constructor()
    {
        super();
        this.state = {
            section: [
                {title: 'hats',
                 imageUrl: 'https://i.ibb.co/R70vBrQ/Men.png',
                 id:1},
                {title: 'sneakers',
                 imageUrl: 'https://i.ibb.co/R70vBrQ/Men.png',
                 id:2},
                {title: 'jackets',
                 imageUrl: 'https://i.ibb.co/R70vBrQ/Men.png',
                 id:3},
                {title: 'mens',
                size: 'large',
                 imageUrl: 'https://i.ibb.co/R70vBrQ/Men.png',
                 id:4},
                {title: 'womens',
                size: 'large',
                 imageUrl: 'https://i.ibb.co/R70vBrQ/Men.png',
                 id:5},
            ],
        }
    }

    render()
    {
        return(
            <div className = 'directory-menu'>
            {this.state.section.map(({title , imageUrl , id , size}) =>(
                <MenuItem
                            key= {id}
                            title={title}
                            imageUrl = {imageUrl}
                            size = {size}/>
            ))}
            </div>
        );
    }
}

export default Directory; 