import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux'
import { bannerList, requestBannerList } from '../../../store'
class Banner extends Component {
    constructor() {
        super();
        this.state = {
            imgHeight: 176,
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
        this.props.requestBanner();
    }
    render() {
        const { bannerList } = this.props
        return (
            /*  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                     afterChange={index => console.log('slide to', index)} */
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite

                >
                    {bannerList.map(item => (
                        <a
                            key={item.id}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={this.$imgUrl + item.img}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        bannerList: bannerList(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestBanner: () => {
            dispatch(requestBannerList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
