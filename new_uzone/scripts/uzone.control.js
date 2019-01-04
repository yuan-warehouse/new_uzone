// 头组件
Vue.component('uz-header', {
	template: '<i-header breakpoint="md" collapsible :collapsed-width="78" >\
                <row type="flex" justify="center" class="code-row-bg">\
                    <i-col :xs="24" :sm="24" :md="18" :lg="18">\
                        <i-menu mode="horizontal" theme="light">\
                            <div class="layout-logo"><img src="image/logo.png" width=" 30" height="30" /></div>\
                            <div class="layout-nav">\
                                <a href=index.html><menu-item name="1">首页</menu-item></a>\
                                <menu-item name="2">\
                                    <dropdown>\
                                        <a href="javascript:void(0)">\
                                            解决方案\
                                            <icon type="ios-arrow-down"></icon>\
                                        </a>\
                                        <dropdown-menu slot="list">\
                                            <a href="solution-FiTools.html"><dropdown-item>飞图 (FiTools) 工控平台软件</dropdown-item></a>\
                                            <a href="solution-fontend.html"><dropdown-item>前端开发库</dropdown-item></a>\
                                            <a href="solution-cloud.html"><dropdown-item>云服务</dropdown-item></a>\
											<a href="solution-embedded.html"><dropdown-item>嵌入式系统</dropdown-item></a>\
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
                                            <a href="solution-FiTools.html"><dropdown-item>车架防吊起系统</dropdown-item></a>\
                                            <a href="solution-fontend.html"><dropdown-item>锁扣识别系统</dropdown-item></a>\
                                            <a href="solution-cloud.html"><dropdown-item>防砸车头系统</dropdown-item></a>\
											<a href="solution-embedded.html"><dropdown-item>集装箱堆放异常检测系统</dropdown-item></a>\
											<a href="solution-FiTools.html"><dropdown-item>集卡对位系统</dropdown-item></a>\
                                            <a href="solution-fontend.html"><dropdown-item>异常/入侵检测系统</dropdown-item></a>\
                                            <a href="solution-cloud.html"><dropdown-item>轮胎吊大车自动行走系统（AGSS）</dropdown-item></a>\
											<a href="solution-embedded.html"><dropdown-item>声纹检测系统（VRS)</dropdown-item></a>\
											<a href="solution-FiTools.html"><dropdown-item>集装箱码头智能定位系统（PDS)</dropdown-item></a>\
                                            <a href="solution-fontend.html"><dropdown-item>防打保龄系统</dropdown-item></a>\
                                            <a href="solution-cloud.html"><dropdown-item>远程/自动操作</dropdown-item></a>\
											<a href="solution-embedded.html"><dropdown-item>基于设备云技术的电力监控系统</dropdown-item></a>\
											<a href="solution-FiTools.html"><dropdown-item>特种设备安全监控管理系统</dropdown-item></a>\
                                            <a href="solution-fontend.html"><dropdown-item>远程 PLC 编程管理系统</dropdown-item></a>\
                                            <a href="solution-cloud.html"><dropdown-item>基于大数据-云平台的智能建筑管理系统</dropdown-item></a>\
                                        </dropdown-menu>\
                                    </dropdown>\
                                </menu-item>\
                                <menu-item name="4">\
                                    我的设备\
                                </menu-item>\
                                <menu-item name="5">\
                                    <dropdown>\
                                        <a href="javascript:void(0)">\
                                            关于我们\
                                            <icon type="ios-arrow-down"></icon>\
                                        </a>\
                                        <dropdown-menu slot="list">\
                                            <a href="company.html"><dropdown-item >公司介绍</dropdown-item></a>\
                                            <a href="contact.html"><dropdown-item >联系我们</dropdown-item></a>\
                                            <a href="join.html"><dropdown-item >加入我们</dropdown-item></a>\
                                        </dropdown-menu>\
                                    </dropdown>\
                                </menu-item>\
                            </div>\
                        </i-menu>\
                    </i-col>\
                </row>\
            </i-header>'
});



// 尾组件
Vue.component('uz-footer', {
	template: '\
	<i-footer class="layout-footer-center">\
		<row type="flex" justify="center" class="code-row-bg">\
		<i-col :xs="24" :sm="24" :md="14" :lg="14">\
	<row type="flex" justify="space-between" class="code-row-bg">\
	<i-col :xs="24" :sm="24" :md="6" :lg="6">\
		<h3> <span>解决方案</span></h3>\
			<ul>\
				<li><a href="solution-FiTools.html">飞图 (FiTools) 工控平台软件</a></li>\
				<li><a href="solution-fontend.html">前端开发库</a></li>\
				<li><a href="solution-cloud.html">云服务</a></li>\
				<li><a href="solution-embedded.html">嵌入式系统</a></li>\
			</ul>\
    </i-col >\
	<i-col :xs="24" :sm="24" :md="12" :lg="12">\
	<h3>产品案例</h3>\
	<row>\
	<i-col :xs="12" :sm="12" :md="12" :lg="12">\
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
    </i-col >\
	<i-col :xs="12" :sm="12" :md="12" :lg="12">\
		<ul>\
			<li><a href="#home">集装箱码头智能定位系统（PDS)</a></li>\
			<li><a href="#news">防打保龄系统</a></li>\
			<li><a href="#contact">远程/自动操作</a></li>\
			<li><a href="#about">基于设备云技术的电力监控系统</a></li>\
			<li><a href="#home">特种设备安全监控管理系统</a></li>\
			<li><a href="#news">远程 PLC 编程管理系统</a></li>\
			<li><a href="#contact">基于大数据-云平台的智能建筑管理系统</a></li>\
        </ul>\
    </i-col >\
	</row>\
	</i-col>\
	<i-col :xs="24" :sm="24" :md="6" :lg="6">\
		<h3> 关于我们</h3>\
			<ul>\
				<li><a href="company.html">公司介绍</a></li>\
				<li><a href="contact.html">联系我们</a></li>\
				<li><a href="join.html">加入我们</a></li>\
			</ul>\
    </i-col >\
	</i-col>\
	</row>\
	<div class="copywright">苏ICP备13037848号-1©常州云众智能科技有限公司版权所有</div>\
	</i-col>\
	</row>\
	</i-footer>\
	'
});