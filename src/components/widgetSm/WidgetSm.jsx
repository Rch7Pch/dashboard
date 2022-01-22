import './widgetSm.css'
import {Visibility} from "@material-ui/icons";

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='new user avatar' className='widgetSmImage' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

                <li className='widgetSmListItem'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='new user avatar' className='widgetSmImage' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

                <li className='widgetSmListItem'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='new user avatar' className='widgetSmImage' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}