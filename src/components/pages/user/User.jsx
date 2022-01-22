import './user.css'
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@material-ui/icons';
import {Link} from 'react-router-dom'

export default function User() {
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <Link to='/newUser'>
                    <button className='userAddButton'>Create</button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y6K_VG-pfAz2qpeeI5quFwHaIp%26pid%3DApi&f=1'
                             alt='user avatar' className='userShowImg' />
                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>Anna Becker</span>
                            <span className='userShowUserTitle'>Software Engineer</span>
                        </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowTitle'>Account Details</span>
                        <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon' />
                            <span className='userShowInfoTitle'>annabeck999</span>
                        </div>
                        <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon' />
                            <span className='userShowInfoTitle'>10.12.1998</span>
                        </div>

                        <span className='userShowTitle'>Contact Details</span>
                        <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon' />
                            <span className='userShowInfoTitle'>+1 123 456 67</span>
                        </div>
                        <div className='userShowInfo'>
                            <MailOutline className='userShowIcon' />
                            <span className='userShowInfoTitle'>annabeck999@gmail.com</span>
                        </div>
                        <div className='userShowInfo'>
                            <LocationSearching className='userShowIcon' />
                            <span className='userShowInfoTitle'>New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className='userUpdateForm'>
                        <div className='userUpdateLeft'>
                            <div className='userUpdateItem'>
                                <label>Username</label>
                                <input type='text' placeholder='annabeck999' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Full Name</label>
                                <input type='name' placeholder='Anna Becker' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Email</label>
                                <input type='email' placeholder='annabeck999@gmail.com' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Phone</label>
                                <input type='tel' placeholder='+ 1 123 456 67' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Address</label>
                                <input type='text' placeholder='New York | USA' className='userUpdateInput' />
                            </div>
                        </div>
                        <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                                <img
                                    src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y6K_VG-pfAz2qpeeI5quFwHaIp%26pid%3DApi&f=1'
                                    alt='user avatar' className='userUpdateImg'
                                />
                                <label for='file'><Publish className='userUpdateIcon' /></label>
                                <input type='file' id='file' style={{display: 'none'}}/>
                            </div>
                            <button className='userUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}