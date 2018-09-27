import React from 'react';
import logo from '../img/logo.png';
import BlueButton from '../components/blue-button';
import img1 from '../img/img1.png';
import imgPerson1 from '../img/img-person1.png';

import '../styles/style.css';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listMenu: null,
        }
    }

    render(){
        return(
            <div>
                <header className="main">
                    <div className="header">   
                        <img src={logo} className="logo" alt="logo" />
                        <ul className="top-menu">
                            <BlueButton>Beranda</BlueButton>
                            <BlueButton>Paket Kami</BlueButton>
                            <BlueButton>Testimoni</BlueButton>
                            <BlueButton>Galeri</BlueButton>
                            <BlueButton>Blog</BlueButton>
                            <BlueButton>Contact Us</BlueButton>
                        </ul>
                    </div>
                </header>
                <div className="bg-cover">
                    <div className="content">
                        <div className="content-inside">
                            <div className="caption"><b>Bali The Heritage</b></div>
                            <div className="caption-little"><p>Nikmati paket liburan super hemat ke pulau Bali<br/>bersama keluarga selama 4 Hari 4 Malam</p></div>
                            <div className="price"><b>Hanya Rp 300k/pax</b></div>
                            <div className="btn"><a className="btn-order" href="">Pesan Sekarang</a></div>
                        </div>
                    </div>
                </div>
                <div className="bg-featured-cover">
                    <div className="content">
                        <div className="heading">Paket Wisata Terbaik Kami</div>
                        <div className="sub-heading">The best packages from us</div>   
                        <div className="content-featured">
                            <div className="desc">
                                <div className="sub-heading">Layanan terbaik dari kami untuk anda</div>
                                <div className="title-heading">Kami Menyediakan Lebih dari 170 Destinasi Wisata Nasional dan lebih dari 20 Destinasi Wisata Internasional.</div>
                                <div className="content-feature">Paket Wisata yang kami tawarkan sudah termasuk dengan tiket perjalan pulang pergi, fasilitas hotel dan tour guide yang akan memudahkan anda dalam berlibur bersama keluarga. Selain itu kami juga menyediakan paket sesuai dengan kebutuhan dan rencana wisata Anda. Kami memiliki 2 kategori paket wisata terbaik dengan penawaran terbaik.</div>
                                <div className="col-12" style={{paddingTop:25}}>
                                    <div className="btn"><a className="btn-order-light" href="">Pesan Nasional</a></div>
                                    <div className="btn"><a className="btn-order-light" href="">Pesan Internasional</a></div>
                                </div>
                            </div>
                            <div className="img-content" style={{textAlign:"end"}}>
                                <img style={{width:"85%"}} src={img1}></img>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimony">
                    <div className="content">
                        <div className="heading">Testimoni dari pelanggan kami</div>
                        <div className="sub-heading">Testimonials from our customers</div>   
                        <div className="content-testimony">
                            <div className="photo">
                                <img src={imgPerson1} class="person-testimony"></img>
                            </div>
                            <div className="testimony-content">
                                <div className="author-testimony">
                                    Fifa Pransiska - Dosen Universitas Negeri Surabaya
                                </div>
                                <div className="detail-testimony">
                                    “Yukdolan! menawarkan fasilitas yang memuaskan berlibur terasa sangat mudah karena semua kebutuhan mulai tiket, hotel dan tour guide sudah disiapkan.”                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default Home;