// 头组件
Vue.component('uz-header', {
	template: '<i-header breakpoint="md" collapsible :collapsed-width="78" >\
                <row type="flex" justify="center" class="code-row-bg">\
                    <i-col :xs="24" :sm="24" :md="18" :lg="18">\
                        <i-menu mode="horizontal" theme="light" active-name="1" >\
                            <div class="layout-logo"><img src="image/logo.png" width=" 30" height="30" /></div>\
                            <div class="layout-nav">\
                                <menu-item name="1">\
                                    首页\
                                </menu-item>\
                                <menu-item name="2">\
                                    <dropdown>\
                                        <a href="javascript:void(0)">\
                                            解决方案\
                                            <icon type="ios-arrow-down"></icon>\
                                        </a>\
                                        <dropdown-menu slot="list">\
                                            <dropdown-item href="#">飞图 (FiTools) 工控平台软件</dropdown-item>\
                                            <dropdown-item href="#">前端开发库</dropdown-item>\
                                            <dropdown-item href="#">云服务</dropdown-item>\
                                        </dropdown-menu>\
                                    </dropdown>\
                                </menu-item>\
                                <menu-item name="3">\
                                    <dropdown>\
                                        <a href="javascript:void(0)">\
                                            产品案例\
                                            <icon type="ios-arrow-down"></icon>\
                                        </a>\
                                        <dropdown-menu slot="list">\
                                            <dropdown-item href="#">飞图 (FiTools) 工控平台软件</dropdown-item>\
                                            <dropdown-item href="#">前端开发库</dropdown-item>\
                                            <dropdown-item href="#">云服务</dropdown-item>\
                                        </dropdown-menu>\
                                    </dropdown>\
                                </menu-item>\
                                <menu-item name="4">\
                                    我的设备\
                                </menu-item>\
                                <menu-item name="5">\
                                    关于我们\
                                </menu-item>\
                            </div>\
                        </i-menu>\
                    </i-col>\
                </row>\
            </i-header>'
});

// 轮播组件
Vue.component('uz-carousel', {
	template: '\
    <carousel v-model="value1" loop>\
        <carousel-item>\
            <div class="demo-carousel">\
                <row>\
                    <i-col span="6">\
                        <h1>工控平台软件</h1>\
                        <p>新一代跨平台（Windows/Linux）工业自动化软件，可广泛应用于港口自动化、电力、市政工程、智能楼宇等行业。</p>\
                        </i-col>\
                    <i-col span="6">\
                        <img src="image/Front-end.png" />\
                    </i-col>\
                </row>\
            </div>\
        </carousel-item>\
        <carousel-item>\
            <div class="demo-carousel">\
                <row>\
                    <i-col span="6">\
                        <h1>前端开发库</h1>\
                        <p>可配合工控平台软件使用，	编辑设计基于Html的人机界面，支持响应式页面设计。</p>\
                    </i-col>\
                    <i-col span="6">\
                        <img src="image/Front-end.png" />\
                    </i-col>\
                </row>\
                </div>\
        </carousel-item>\
        <carousel-item>\
            <div class="demo-carousel">\
                <row>\
                    <i-col span="6">\
                        <h1>云服务</h1>\
                        <p>为各种跨平台物联网应用、行业解决方案提供可靠简便的云端接入、存储、计算和展现服务。</p>\
                    </i-col>\
                    <i-col span="6">\
                        <img src="image/Front-end.png" />\
                    </i-col>\
                </row>\
            </div>\
        </carousel-item>\
        <carousel-item>\
            <div class="demo-carousel">\
                <row>\
                    <i-col span="6">\
                        <h1>嵌入式系统</h1>\
                        <p>基于云众工控平台软件可高效地运行于linux平台上，且支持arm架构的CPU。我司可提供多种定制化的特制硬件开发服务。</p>\
                    </i-col>\
                    <i-col span="6">\
                        <img src="image/Front-end.png" />\
                    </i-col>\
                </row>\
            </div>\
        </carousel-item>\
    </carousel>',
	data() {
		return {
			value1: 0
		};
	}
});

// 尾组件
Vue.component('uz-footer', {
	template: '<i-footer class="layout-footer-center">\
		< row type="flex" justify="center" class= "code-row-bg" >\
			<i-col : xs="24" : sm="24" : md="18" : lg="18">\
				<row type="flex" justify="space-between" class="code-row-bg">\
					<i-col : xs="24" :sm="24" :md="6" :lg="6">\
                                <h3><span>解决方案</span></h3>\
					<ul>\
						<li><a href="#home">飞图(FiTools)工控平台软件</a></li>\
						<li><a href="#news">前端开发库</a></li>\
						<li><a href="#contact">云服务</a></li>\
						<li><a href="#about">嵌入式系统</a></li>\
					</ul>\
                            </i-col>\
				<i-col : xs="24" :sm="24" :md="12" :lg="12">\
                                <h3>产品案例</h3>\
				<row>\
					<i-col : xs="12" :sm="12" :md="12" :lg="12">\
                                        <ul>\
						<li><a href="Company Profile.html">车架防吊起系统</a></li>\
						<li><a href="#news">锁扣识别系统</a></li>\
						<li><a href="#contact">防砸车头系统</a></li>\
						<li><a href="#about">集装箱堆放异常检测系统</a></li>\
						<li><a href="#home">集卡对位系统</a></li>\
						<li><a href="#news">异常/入侵检测系统</a></li>\
						<li><a href="#contact">轮胎吊大车自动行走系统（AGSS）</a></li>\
						<li><a href="#about">声纹检测系统（VRS)</a></li>\
					</ul>\
                                    </i-col>\
				<i-col : xs="12" :sm="12" :md="12" :lg="12">\
                                        <ul>\
					<li><a href="#home">车架防吊起系统</a></li>\
					<li><a href="#news">锁扣识别系统</a></li>\
					<li><a href="#contact">防砸车头系统</a></li>\
					<li><a href="#about">集装箱堆放异常检测系统</a></li>\
					<li><a href="#home">集卡对位系统</a></li>\
					<li><a href="#news">异常/入侵检测系统</a></li>\
					<li><a href="#contact">轮胎吊大车自动行走系统（AGSS）</a></li>\
					<li><a href="#about">声纹检测系统（VRS)</a></li>\
				</ul>\
			</i-col>\
                                </row>\
                            </i-col >\
		<i-col : xs="24" : sm="24" : md="6" : lg="6">\
			<h3>关于我们</h3>\
			<ul>\
				<li><a href="#home">飞图(FiTools)工控平台软件</a></li>\
				<li><a href="#news">前端开发库</a></li>\
				<li><a href="#contact">云服务</a></li>\
				<li><a href="#about">嵌入式系统</a></li>\
			</ul>\
		</i-col>\
                        </row>\
		<div class="copywright">苏ICP备13037848号-1©常州云众智能科技有限公司版权所有</div>\
                    </i-col >\
                </row>\
            </i-footer >'
});