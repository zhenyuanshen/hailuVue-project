<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加检测者数据</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图 -->
        <el-card>
            <!-- 提示区域 -->
            <el-alert title="添加检测者数据信息" type="info" center show-icon :closable="false">
            </el-alert>
            <!-- 步骤条区域 -->
            <el-steps :space="200" :active="activeIndex - 0" finish-status="success" align-center>
                <el-step title="基本信息"></el-step>
                <el-step title="粪便常规生化指标"></el-step>
                <el-step title="粪便的短链脂肪酸"></el-step>
                <el-step title="粪便中的益生菌"></el-step>
                <el-step title="产气量与降解率(后)"></el-step>
                <el-step title="短链脂肪酸(后)"></el-step>
                <el-step title="发酵后的益生菌"></el-step>
                <el-step title="16S rRNA测序"></el-step>
                <el-step title="完成"></el-step>
            </el-steps>

            <!-- tab栏区域 -->
            <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="100px" label-position="left">
                <el-tabs v-model="activeIndex" :tab-position="'left'">
                    <el-tab-pane label="基本信息" name="0">
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="addForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" prop="gender">
                            <el-input v-model="addForm.gender"></el-input>
                        </el-form-item>
                        <el-form-item label="年龄" prop="age">
                            <el-input v-model="addForm.age"></el-input>
                        </el-form-item>
                        <el-form-item label="检测次数" prop="numOfExam">
                            <el-input v-model="addForm.numOfExam" type="number"></el-input>
                        </el-form-item>
                        <el-form-item label="最近检测日期" prop="timeOfExam">
                            <el-input v-model="addForm.timeOfExam"></el-input>
                        </el-form-item>
                        <el-form-item label="样本编号" prop="sampleId">
                            <el-input v-model="addForm.sampleId"></el-input>
                        </el-form-item>
                        <el-form-item label="收样日期" prop="sampleTime">
                            <el-input v-model="addForm.sampleTime"></el-input>
                        </el-form-item>
                        <el-form-item label="主检人" prop="zjMan">
                            <el-input v-model="addForm.zjMan"></el-input>
                        </el-form-item>
                        <el-form-item label="审核人" prop="shMan">
                            <el-input v-model="addForm.shMan"></el-input>
                        </el-form-item>
                        <el-form-item label="批准人" prop="pzMan">
                            <el-input v-model="addForm.pzMan"></el-input>
                        </el-form-item>
                    </el-tab-pane>
                    <!-- 粪便常规生化指标部分 -->
                    <el-tab-pane label="粪便常规生化指标" name="1">
                        <el-form-item label="样本编号" prop="sampleId2">
                            <el-input v-model="addForm.sampleId2"></el-input>
                        </el-form-item>
                        <el-form-item label="检测时间" prop="time">
                            <el-input v-model="addForm.time"></el-input>
                        </el-form-item>
                        <el-form-item label="检测人" prop="person">
                            <el-input v-model="addForm.person"></el-input>
                        </el-form-item>
                        <el-form-item label="样本类型" prop="class">
                            <el-input v-model="addForm.class"></el-input>
                        </el-form-item>
                        <el-form-item label="颜色" prop="color">
                            <el-input v-model="addForm.color"></el-input>
                        </el-form-item>
                        <el-form-item label="松软程度" prop="Issoft">
                            <el-input v-model="addForm.Issoft"></el-input>
                        </el-form-item>
                        <el-form-item label="布里斯托分类" prop="blstfl">
                            <el-input v-model="addForm.blstfl"></el-input>
                        </el-form-item>
                        <el-form-item label="潜血双联-Tf" prop="qxslTf">
                            <el-input v-model="addForm.qxslTf"></el-input>
                        </el-form-item>
                        <el-form-item label="潜血双联-Hb" prop="qxslHb">
                            <el-input v-model="addForm.qxslHb"></el-input>
                        </el-form-item>
                        <el-form-item label="钙卫蛋白" prop="gwdb">
                            <el-input v-model="addForm.gwdb"></el-input>
                        </el-form-item>
                        <el-form-item label="幽门螺旋杆菌（HP）" prop="ymlxgj">
                            <el-input v-model="addForm.ymlxgj"></el-input>
                        </el-form-item>
                        <el-form-item label="粪氨" prop="fa">
                            <el-input v-model="addForm.fa"></el-input>
                        </el-form-item>
                        <el-form-item label="粪总胆汁酸" prop="fzdzs">
                            <el-input v-model="addForm.fzdzs"></el-input>
                        </el-form-item>
                    </el-tab-pane>
                    <!-- 粪便的短链脂肪酸部分 -->
                    <el-tab-pane label="粪便的短链脂肪酸" name="2">
                        <el-form-item label="样本编号" prop="sampleId3">
                            <el-input v-model="addForm.sampleId3"></el-input>
                        </el-form-item>
                        <el-form-item label="检测时间" prop="time3">
                            <el-input v-model="addForm.time3"></el-input>
                        </el-form-item>
                        <el-form-item label="检测人" prop="person3">
                            <el-input v-model="addForm.person3"></el-input>
                        </el-form-item>
                        <el-form-item label="样本类型" prop="class3">
                            <el-input v-model="addForm.class3"></el-input>
                        </el-form-item>
                        <el-form-item label="总酸" prop="zs">
                            <el-input v-model="addForm.zs"></el-input>
                        </el-form-item>
                        <el-form-item label="乙酸" prop="ys">
                            <el-input v-model="addForm.ys"></el-input>
                        </el-form-item>
                        <el-form-item label="丙酸" prop="bs">
                            <el-input v-model="addForm.bs"></el-input>
                        </el-form-item>
                        <el-form-item label="丁酸" prop="ds">
                            <el-input v-model="addForm.ds"></el-input>
                        </el-form-item>
                        <el-form-item label="异丁酸" prop="yds">
                            <el-input v-model="addForm.yds"></el-input>
                        </el-form-item>
                        <el-form-item label="戊酸" prop="ws">
                            <el-input v-model="addForm.ws"></el-input>
                        </el-form-item>
                        <el-form-item label="异戊酸" prop="yws">
                            <el-input v-model="addForm.yws"></el-input>
                        </el-form-item>
                    </el-tab-pane>
                    <!-- 粪便中的益生菌部分 -->
                    <el-tab-pane label="粪便中的益生菌" name="3">
                        <el-form-item label="样本编号" prop="sampleId4">
                            <el-input v-model="addForm.sampleId4"></el-input>
                        </el-form-item>
                        <el-form-item label="检测时间" prop="time4">
                            <el-input v-model="addForm.time4"></el-input>
                        </el-form-item>
                        <el-form-item label="检测人" prop="person4">
                            <el-input v-model="addForm.person4"></el-input>
                        </el-form-item>
                        <el-form-item label="样本类型" prop="class4">
                            <el-input v-model="addForm.class4"></el-input>
                        </el-form-item>
                        <el-form-item label="双歧杆菌" prop="sqgj">
                            <el-input v-model="addForm.sqgj"></el-input>
                        </el-form-item>
                        <el-form-item label="乳酸杆菌" prop="rsgj">
                            <el-input v-model="addForm.rsgj"></el-input>
                        </el-form-item>
                    </el-tab-pane>
                    <!-- 产气量与降解率(后)部分 -->
                    <el-tab-pane label="产气量与降解率(后)" name="4">
                        <el-form-item label="样本编号" prop="sampleId5">
                            <el-input v-model="addForm.sampleId5"></el-input>
                        </el-form-item>
                        <el-form-item label="检测时间" prop="time5">
                            <el-input v-model="addForm.time5"></el-input>
                        </el-form-item>
                        <el-form-item label="检测人" prop="person5">
                            <el-input v-model="addForm.person5"></el-input>
                        </el-form-item>
                        <div class="test" style="text-align: center; color: #67C23A;">产气量</div>
                        <el-form-item label="空白对照" prop="blank">
                            <el-input v-model="addForm.blank"></el-input>
                        </el-form-item>
                        <el-form-item label="乳果糖" prop="rgt">
                            <el-input v-model="addForm.rgt"></el-input>
                        </el-form-item>
                        <el-form-item label="棉子糖" prop="mzt">
                            <el-input v-model="addForm.mzt"></el-input>
                        </el-form-item>
                        <el-form-item label="低聚果糖" prop="djgt">
                            <el-input v-model="addForm.djgt"></el-input>
                        </el-form-item>
                        <el-form-item label="低聚半乳糖" prop="brt">
                            <el-input v-model="addForm.brt"></el-input>
                        </el-form-item>
                        <el-form-item label="低聚异麦芽糖" prop="djymyt">
                            <el-input v-model="addForm.djymyt"></el-input>
                        </el-form-item>
                        <el-form-item label="低聚甘露糖" prop="djglt">
                            <el-input v-model="addForm.djglt"></el-input>
                        </el-form-item>
                        <el-form-item label="低聚木糖" prop="djmt">
                            <el-input v-model="addForm.djmt"></el-input>
                        </el-form-item>
                        <el-form-item label="菊粉" prop="jf">
                            <el-input v-model="addForm.jf"></el-input>
                        </el-form-item>
                        <el-form-item label="淀粉" prop="df">
                            <el-input v-model="addForm.df"></el-input>
                        </el-form-item>
                        <el-form-item label="甘露糖醇" prop="gltc">
                            <el-input v-model="addForm.gltc"></el-input>
                        </el-form-item>
                         <el-form-item label="木糖醇" prop="mtc">
                            <el-input v-model="addForm.mtc"></el-input>
                        </el-form-item>
                        <div class="test" style="text-align: center; color: #67C23A;">降解率</div>
                        <el-form-item label="乳果糖" prop="rgt">
                            <el-input v-model="addForm.rgt"></el-input>
                        </el-form-item>
                        <el-form-item label="棉子糖" prop="mzt">
                            <el-input v-model="addForm.mzt"></el-input>
                        </el-form-item>
                        <el-form-item label="低聚果糖" prop="djgt">
                            <el-input v-model="addForm.djgt"></el-input>
                        </el-form-item>
                        <el-form-item label="低聚半乳糖" prop="brt">
                            <el-input v-model="addForm.brt"></el-input>
                        </el-form-item>
                        <el-form-item label="低聚异麦芽糖" prop="djymyt">
                            <el-input v-model="addForm.djymyt"></el-input>
                        </el-form-item>
                        <el-form-item label="低聚甘露糖" prop="djglt">
                            <el-input v-model="addForm.djglt"></el-input>
                        </el-form-item>
                        <el-form-item label="低聚木糖" prop="djmt">
                            <el-input v-model="addForm.djmt"></el-input>
                        </el-form-item>
                        <el-form-item label="菊粉" prop="jf">
                            <el-input v-model="addForm.jf"></el-input>
                        </el-form-item>
                        <el-form-item label="淀粉" prop="df">
                            <el-input v-model="addForm.df"></el-input>
                        </el-form-item>
                    </el-tab-pane>
                    <!-- 短链脂肪酸(后)部分 -->
                    <el-tab-pane label="短链脂肪酸(后)" name="5">短链脂肪酸(后)</el-tab-pane>
                    <!-- 发酵后的益生菌部分 -->
                    <el-tab-pane label="发酵后的益生菌" name="6">
                        <el-form-item label="样本编号" prop="sampleId6">
                            <el-input v-model="addForm.sampleId6"></el-input>
                        </el-form-item>
                        <el-form-item label="检测时间" prop="time6">
                            <el-input v-model="addForm.time6"></el-input>
                        </el-form-item>
                        <el-form-item label="检测人" prop="person6">
                            <el-input v-model="addForm.person6"></el-input>
                        </el-form-item>
                        <div class="test" style="text-align: center; color: #67C23A;">双歧杆菌</div>
                        <el-form-item label="LAU" prop="lau">
                            <el-input v-model="addForm.lau"></el-input>
                        </el-form-item>
                        <el-form-item label="RAF" prop="raf">
                            <el-input v-model="addForm.raf"></el-input>
                        </el-form-item>
                        <el-form-item label="FOS" prop="fos">
                            <el-input v-model="addForm.fos"></el-input>
                        </el-form-item>
                        <el-form-item label="GOS" prop="gos">
                            <el-input v-model="addForm.gos"></el-input>
                        </el-form-item>
                        <el-form-item label="IMO" prop="imo">
                            <el-input v-model="addForm.imo"></el-input>
                        </el-form-item>
                        <el-form-item label="MOS" prop="mos">
                            <el-input v-model="addForm.mos"></el-input>
                        </el-form-item>
                        <el-form-item label="XOS" prop="xos">
                            <el-input v-model="addForm.xos"></el-input>
                        </el-form-item>
                        <el-form-item label="INU" prop="inu">
                            <el-input v-model="addForm.inu"></el-input>
                        </el-form-item>
                        <el-form-item label="STA" prop="sta">
                            <el-input v-model="addForm.sta"></el-input>
                        </el-form-item>
                        <el-form-item label="MAI" prop="mai">
                            <el-input v-model="addForm.mai"></el-input>
                        </el-form-item>
                        <el-form-item label="XYI" prop="xyi">
                            <el-input v-model="addForm.xyi"></el-input>
                        </el-form-item>
                        <div class="test" style="text-align: center; color: #67C23A;">乳酸菌</div>
                        <el-form-item label="LAU" prop="lau1">
                            <el-input v-model="addForm.lau1"></el-input>
                        </el-form-item>
                        <el-form-item label="RAF" prop="raf1">
                            <el-input v-model="addForm.raf1"></el-input>
                        </el-form-item>
                        <el-form-item label="FOS" prop="fos1">
                            <el-input v-model="addForm.fos1"></el-input>
                        </el-form-item>
                        <el-form-item label="GOS" prop="gos1">
                            <el-input v-model="addForm.gos1"></el-input>
                        </el-form-item>
                        <el-form-item label="IMO" prop="imo1">
                            <el-input v-model="addForm.imo1"></el-input>
                        </el-form-item>
                        <el-form-item label="MOS" prop="mos1">
                            <el-input v-model="addForm.mos1"></el-input>
                        </el-form-item>
                        <el-form-item label="XOS" prop="xos1">
                            <el-input v-model="addForm.xos1"></el-input>
                        </el-form-item>
                        <el-form-item label="INU" prop="inu1">
                            <el-input v-model="addForm.inu1"></el-input>
                        </el-form-item>
                        <el-form-item label="STA" prop="sta1">
                            <el-input v-model="addForm.sta1"></el-input>
                        </el-form-item>
                        <el-form-item label="MAI" prop="mai1">
                            <el-input v-model="addForm.mai1"></el-input>
                        </el-form-item>
                        <el-form-item label="XYI" prop="xyi1">
                            <el-input v-model="addForm.xyi1"></el-input>
                        </el-form-item>
                    </el-tab-pane>
                    <!-- 16S rRNA测序部分 -->
                    <el-tab-pane label="16S rRNA测序" name="7">
                        <el-form-item label="样本编号" prop="sampleId7">
                            <el-input v-model="addForm.sampleId7"></el-input>
                        </el-form-item>
                        <el-form-item label="检测时间" prop="time7">
                            <el-input v-model="addForm.time7"></el-input>
                        </el-form-item>
                        <el-form-item label="检测人" prop="person7">
                            <el-input v-model="addForm.person7"></el-input>
                        </el-form-item>
                        <el-form-item label="肠道菌群多样性" prop="diversity">
                            <el-input v-model="addForm.diversity"></el-input>
                        </el-form-item>
                        <el-form-item label="有益菌" prop="yyj">
                            <el-input v-model="addForm.yyj"></el-input>
                        </el-form-item>
                        <el-form-item label="有害菌" prop="Harm">
                            <el-input v-model="addForm.Harm"></el-input>
                        </el-form-item>
                        <el-form-item label="拟杆菌门" prop="ngjm">
                            <el-input v-model="addForm.ngjm"></el-input>
                        </el-form-item>
                        <el-form-item label="厚壁菌门" prop="hbjm">
                            <el-input v-model="addForm.hbjm"></el-input>
                        </el-form-item>
                        <el-form-item label="变形菌门" prop="bxjm">
                            <el-input v-model="addForm.bxjm"></el-input>
                        </el-form-item>
                        <el-form-item label="梭杆菌门" prop="sgjm">
                            <el-input v-model="addForm.sgjm"></el-input>
                        </el-form-item>
                        <el-form-item label="放线菌门" prop="fxjm">
                            <el-input v-model="addForm.fxjm"></el-input>
                        </el-form-item>
                        <el-form-item label="厚壁菌门/拟杆菌门" prop="hbngjm">
                            <el-input v-model="addForm.hbngjm"></el-input>
                        </el-form-item>
                        <el-form-item label="罗斯拜瑞氏菌属" prop="lsbrsjs">
                            <el-input v-model="addForm.lsbrsjs"></el-input>
                        </el-form-item>
                        <el-form-item label="柔嫩梭菌属" prop="rnsjs">
                            <el-input v-model="addForm.rnsjs"></el-input>
                        </el-form-item>
                        <el-form-item label="乳酸杆菌属" prop="rsgjs">
                            <el-input v-model="addForm.rsgjs"></el-input>
                        </el-form-item>
                        <el-form-item label="阿克曼氏菌属" prop="akmjs">
                            <el-input v-model="addForm.akmjs"></el-input>
                        </el-form-item>
                        <el-form-item label="真杆菌属" prop="zgjs">
                            <el-input v-model="addForm.zgjs"></el-input>
                        </el-form-item>
                        <el-form-item label="韦荣氏球菌属" prop="wrsqjs">
                            <el-input v-model="addForm.wrsqjs"></el-input>
                        </el-form-item>
                        <el-form-item label="脱硫弧菌属" prop="tlgjs">
                            <el-input v-model="addForm.tlgjs"></el-input>
                        </el-form-item>
                        <el-form-item label="多尔氏菌属" prop="desjs">
                            <el-input v-model="addForm.desjs"></el-input>
                        </el-form-item>
                        <el-form-item label="弯曲杆菌属" prop="wqgjs">
                            <el-input v-model="addForm.wqgjs"></el-input>
                        </el-form-item>
                        <el-form-item label="脆弱拟杆菌" prop="crngj">
                            <el-input v-model="addForm.crngj"></el-input>
                        </el-form-item>
                        <el-form-item label="胶胨罗斯氏菌" prop="jdlssj">
                            <el-input v-model="addForm.jdlssj"></el-input>
                        </el-form-item>
                        <el-form-item label="副流感嗜血杆菌" prop="flgsxgj">
                            <el-input v-model="addForm.flgsxgj"></el-input>
                        </el-form-item>
                        <el-form-item label="微黄奈瑟氏球菌" prop="whnssqj">
                            <el-input v-model="addForm.whnssqj"></el-input>
                        </el-form-item>
                        <el-form-item label="表兄链球菌" prop="bxlqj">
                            <el-input v-model="addForm.bxlqj"></el-input>
                        </el-form-item>
                        <el-form-item label="维生素B1" prop="wssB1">
                            <el-input v-model="addForm.wssB1"></el-input>
                        </el-form-item>
                        <el-form-item label="维生素B2" prop="wssB2">
                            <el-input v-model="addForm.wssB2"></el-input>
                        </el-form-item>
                        <el-form-item label="维生素B3" prop="wssB3">
                            <el-input v-model="addForm.wssB3"></el-input>
                        </el-form-item>
                        <el-form-item label="维生素B5" prop="wssB5">
                            <el-input v-model="addForm.wssB5"></el-input>
                        </el-form-item>
                        <el-form-item label="维生素B6" prop="wssB6">
                            <el-input v-model="addForm.wssB6"></el-input>
                        </el-form-item>
                        <el-form-item label="维生素B7" prop="wssB7">
                            <el-input v-model="addForm.wssB7"></el-input>
                        </el-form-item>
                        <el-form-item label="维生素B9" prop="wssB9">
                            <el-input v-model="addForm.wssB9"></el-input>
                        </el-form-item>
                        <el-form-item label="类固醇" prop="lgc">
                            <el-input v-model="addForm.lgc"></el-input>
                        </el-form-item>
                        <el-form-item label="胆碱" prop="dj">
                            <el-input v-model="addForm.dj"></el-input>
                        </el-form-item>
                        <el-form-item label="辅酶Q" prop="fmQ">
                            <el-input v-model="addForm.fmQ"></el-input>
                        </el-form-item>
                        <el-form-item label="胆汁酸" prop="dzs">
                            <el-input v-model="addForm.dzs"></el-input>
                        </el-form-item>
                        <!-- 添加商品的按钮 -->
                        <el-button type="primary" class="btnAdd" @click="add">新增</el-button>
                    </el-tab-pane>
                </el-tabs>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '0',
            // 添加商品的表单数据对象
            addForm: {
                name: '',
                gender: '',
                age: 0,
                numOfExam: 0,
                timeOfExam: '',
                sampleId: '',
                sampleTime: '',
                zjMan: '',
                shMan: '',
                pzMan: '',
                sampleId2: '',
                time: '',
                person: '',
                class: '',
                color: '',
                Issoft: '',
                blstfl: '',
                qxslTf: '',
                qxslHb: '',
                gwdb: '',
                ymlxgj: '',
                fa: '',
                fzdzs: '',
                sampleId3: '',
                time3: '',
                person3: '',
                class3: '',
                zs: '',
                ys: '',
                bs: '',
                ds: '',
                yds: '',
                ws: '',
                yws: '',
                sampleId4: '',
                time4: '',
                person4: '',
                class4: '',
                sqgj: '',
                rsgj: '',
                sampleId5: '',
                time5: '',
                person5: '',
                blank: '',
                rgt: '',
                mzt: '',
                djgt: '',
                brt: '',
                djymyt: '',
                djglt: '',
                djmt: '',
                jf: '',
                df: '',
                gltc: '',
                mtc: '',
                rgt: '',
                mzt: '',
                djgt: '',
                brt: '',
                djymyt: '',
                djglt: '',
                djmt: '',
                jf: '',
                df: '',
                sampleId6: '',
                time6: '',
                person6: '',
                lau: '',
                raf: '',
                fos: '',
                gos: '',
                imo: '',
                mos: '',
                xos: '',
                inu: '',
                sta: '',
                mai: '',
                xyi: '',
                lau1: '',
                raf1: '',
                fos1: '',
                gos1: '',
                imo1: '',
                mos1: '',
                xos1: '',
                inu1: '',
                sta1: '',
                mai1: '',
                xyi1: '',
                sampleId7: '',
                time7: '',
                person7: '',
                diversity: '',
                yyj: '',
                Harm: '',
                ngjm: '',
                hbjm: '',
                bxjm: '',
                sgjm: '',
                fxjm: '',
                hbngjm: '',
                lsbrsjs: '',
                rnsjs: '',
                rsgjs: '',
                akmjs: '',
                zgjs: '',
                wrsqjs: '',
                tlgjs: '',
                desjs: '',
                wqgjs: '',
                crngj: '',
                jdlssj: '',
                flgsxgj: '',
                whnssqj: '',
                bxlqj: '',
                wssB1: '',
                wssB2: '',
                wssB3: '',
                wssB5: '',
                wssB6: '',
                wssB7: '',
                wssB9: '',
                wssB9: '',
                lgc: '',
                dj: '',
                fmQ: '',
                dzs: '',
            },
            addFormRules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                gender: [
                    { required: true, message: '请输入性别', trigger: 'blur' }
                ],
                age: [
                    { required: true, message: '请输入年龄', trigger: 'blur' }
                ],
                numOfExam: [
                    { required: true, message: '请输入检测次数', trigger: 'blur' }
                ],
                timeOfExam: [
                    { required: true, message: '请输入最近检测日期', trigger: 'blur' }
                ],
                sampleId: [
                    { required: true, message: '请输入样本编号', trigger: 'blur' }
                ],
                sampleTime: [
                    { required: true, message: '请输入收样日期', trigger: 'blur' }
                ],
                zjMan: [
                    { required: true, message: '请输入主检人', trigger: 'blur' }
                ],
                shMan: [
                    { required: true, message: '请输入审核人', trigger: 'blur' }
                ],
                pzMan: [
                    { required: true, message: '请输入批准人', trigger: 'blur' }
                ],
                // 粪便常规生化指标部分
                sampleId2: [
                    { required: true, message: '请输入样本编号', trigger: 'blur' }
                ],
                time: [
                    { required: true, message: '请输入检测时间', trigger: 'blur' }
                ],
                person: [
                    { required: true, message: '请输入检测人', trigger: 'blur' }
                ],
                class: [
                    { required: true, message: '请输入样本类型', trigger: 'blur' }
                ],
                color: [
                    { required: true, message: '请输入颜色', trigger: 'blur' }
                ],
                Issoft: [
                    { required: true, message: '请输入松软程度', trigger: 'blur' }
                ],
                blstfl: [
                    { required: true, message: '请输入布里斯托分类', trigger: 'blur' }
                ],
                qxslTf: [
                    { required: true, message: '请输入"潜血双联-Tf', trigger: 'blur' }
                ],
                qxslHb: [
                    { required: true, message: '请输入潜血双联-Hb', trigger: 'blur' }
                ],
                gwdb: [
                    { required: true, message: '请输入钙卫蛋白', trigger: 'blur' }
                ],
                ymlxgj: [
                    { required: true, message: '请输入幽门螺旋杆菌（HP）', trigger: 'blur' }
                ],
                fa: [
                    { required: true, message: '请输入粪氨', trigger: 'blur' }
                ],
                fzdzs: [
                    { required: true, message: '请输入粪总胆汁酸', trigger: 'blur' }
                ],
                // 粪便的短链脂肪酸部分
                sampleId3: [
                    { required: true, message: '请输入样本编号', trigger: 'blur' }
                ],
                time3: [
                    { required: true, message: '请输入检测时间', trigger: 'blur' }
                ],
                person3: [
                    { required: true, message: '请输入检测人', trigger: 'blur' }
                ],
                class3: [
                    { required: true, message: '请输入样本类型', trigger: 'blur' }
                ],
                zs: [
                    { required: true, message: '请输入总酸', trigger: 'blur' }
                ],
                ys: [
                    { required: true, message: '请输入乙酸', trigger: 'blur' }
                ],
                bs: [
                    { required: true, message: '请输入丙酸', trigger: 'blur' }
                ],
                ds: [
                    { required: true, message: '请输入丁酸', trigger: 'blur' }
                ],
                yds: [
                    { required: true, message: '请输入异丁酸', trigger: 'blur' }
                ],
                ws: [
                    { required: true, message: '请输入戊酸', trigger: 'blur' }
                ],
                yws: [
                    { required: true, message: '请输入异戊酸', trigger: 'blur' }
                ],
                // 粪便中的益生菌部分
                sampleId4: [
                    { required: true, message: '请输入样本编号', trigger: 'blur' }
                ],
                time4: [
                    { required: true, message: '请输入检测时间', trigger: 'blur' }
                ],
                person4: [
                    { required: true, message: '请输入检测人', trigger: 'blur' }
                ],
                class4: [
                    { required: true, message: '请输入样本类型', trigger: 'blur' }
                ],
                sqgj: [
                    { required: true, message: '请输入双歧杆菌', trigger: 'blur' }
                ],
                rsgj: [
                    { required: true, message: '请输入乳酸菌', trigger: 'blur' }
                ],
                // 产气量与降解率(后)部分
                sampleId5: [
                    { required: true, message: '请输入样本编号', trigger: 'blur' }
                ],
                time5: [
                    { required: true, message: '请输入检测时间', trigger: 'blur' }
                ],
                person5: [
                    { required: true, message: '请输入检测人', trigger: 'blur' }
                ],
                blank: [
                    { required: true, message: '请输入空白对照(产气量)', trigger: 'blur' }
                ],
                rgt: [
                    { required: true, message: '请输入乳果糖(产气量)', trigger: 'blur' }
                ],
                mzt: [
                    { required: true, message: '请输入棉子糖(产气量)', trigger: 'blur' }
                ],
                djgt: [
                    { required: true, message: '请输入低聚果糖(产气量)', trigger: 'blur' }
                ],
                brt: [
                    { required: true, message: '请输入低聚半乳糖(产气量)', trigger: 'blur' }
                ],
                djymyt: [
                    { required: true, message: '请输入低聚异麦芽糖(产气量)', trigger: 'blur' }
                ],
                djglt: [
                    { required: true, message: '请输入低聚甘露糖(产气量)', trigger: 'blur' }
                ],
                djmt: [
                    { required: true, message: '请输入低聚木糖(产气量)', trigger: 'blur' }
                ],
                jf: [
                    { required: true, message: '请输入菊粉(产气量)', trigger: 'blur' }
                ],
                df: [
                    { required: true, message: '请输入淀粉(产气量)', trigger: 'blur' }
                ],
                gltc: [
                    { required: true, message: '请输入甘露糖醇(产气量)', trigger: 'blur' }
                ],
                mtc: [
                    { required: true, message: '请输入木糖醇(产气量)', trigger: 'blur' }
                ],
                // 降解率
                rgt: [
                    { required: true, message: '请输入乳果糖', trigger: 'blur' }
                ],
                mzt: [
                    { required: true, message: '请输入棉子糖', trigger: 'blur' }
                ],
                djgt: [
                    { required: true, message: '请输入低聚果糖', trigger: 'blur' }
                ],
                brt: [
                    { required: true, message: '请输入低聚半乳糖', trigger: 'blur' }
                ],
                djymyt: [
                    { required: true, message: '请输入低聚异麦芽糖', trigger: 'blur' }
                ],
                djglt: [
                    { required: true, message: '请输入低聚甘露糖', trigger: 'blur' }
                ],
                djmt: [
                    { required: true, message: '请输入低聚木糖', trigger: 'blur' }
                ],
                jf: [
                    { required: true, message: '请输入菊粉', trigger: 'blur' }
                ],
                df: [
                    { required: true, message: '请输入淀粉', trigger: 'blur' }
                ],
                //
                
                // 短链脂肪酸(后)部分
                sampleId6: [
                    { required: true, message: '请输入样本编号', trigger: 'blur' }
                ],
                time6: [
                    { required: true, message: '请输入检测时间', trigger: 'blur' }
                ],
                person6: [
                    { required: true, message: '请输入检测人', trigger: 'blur' }
                ],
                // 双歧杆菌
                lau: [
                    { required: true, message: '请输入LAU(双歧杆菌)', trigger: 'blur' }
                ],
                raf: [
                    { required: true, message: '请输入RAF(双歧杆菌)', trigger: 'blur' }
                ],
                fos: [
                    { required: true, message: '请输入FOS(双歧杆菌)', trigger: 'blur' }
                ],
                gos: [
                    { required: true, message: '请输入GOS(双歧杆菌)', trigger: 'blur' }
                ],
                imo: [
                    { required: true, message: '请输入IMO(双歧杆菌)', trigger: 'blur' }
                ],
                mos: [
                    { required: true, message: '请输入MOS(双歧杆菌)', trigger: 'blur' }
                ],
                xos: [
                    { required: true, message: '请输入XOS(双歧杆菌)', trigger: 'blur' }
                ],
                inu: [
                    { required: true, message: '请输入INU(双歧杆菌)', trigger: 'blur' }
                ],
                sta: [
                    { required: true, message: '请输入STA(双歧杆菌)', trigger: 'blur' }
                ],
                mai: [
                    { required: true, message: '请输入MAI(双歧杆菌)', trigger: 'blur' }
                ],
                xyi: [
                    { required: true, message: '请输入XYI(双歧杆菌)', trigger: 'blur' }
                ],
                // 乳酸菌
                lau1: [
                    { required: true, message: '请输入LAU(乳酸菌)', trigger: 'blur' }
                ],
                raf1: [
                    { required: true, message: '请输入RAF(乳酸菌)', trigger: 'blur' }
                ],
                fos1: [
                    { required: true, message: '请输入FOS(乳酸菌)', trigger: 'blur' }
                ],
                gos1: [
                    { required: true, message: '请输入GOS(乳酸菌)', trigger: 'blur' }
                ],
                imo1: [
                    { required: true, message: '请输入IMO(乳酸菌)', trigger: 'blur' }
                ],
                mos1: [
                    { required: true, message: '请输入MOS(乳酸菌)', trigger: 'blur' }
                ],
                xos1: [
                    { required: true, message: '请输入XOS(乳酸菌)', trigger: 'blur' }
                ],
                inu1: [
                    { required: true, message: '请输入INU(乳酸菌)', trigger: 'blur' }
                ],
                sta1: [
                    { required: true, message: '请输入STA(乳酸菌)', trigger: 'blur' }
                ],
                mai1: [
                    { required: true, message: '请输入MAI(乳酸菌)', trigger: 'blur' }
                ],
                xyi1: [
                    { required: true, message: '请输入XYI(乳酸菌)', trigger: 'blur' }
                ],
                // 16S rRNA测序部分
                sampleId7: [
                    { required: true, message: '请输入样本编号', trigger: 'blur' }
                ],
                time7: [
                    { required: true, message: '请输入检测时间', trigger: 'blur' }
                ],
                person7: [
                    { required: true, message: '请输入检测人', trigger: 'blur' }
                ],
                diversity: [
                    { required: true, message: '请输入肠道菌群多样性', trigger: 'blur' }
                ],
                yyj: [
                    { required: true, message: '请输入有益菌', trigger: 'blur' }
                ],
                Harm: [
                    { required: true, message: '请输入有害菌', trigger: 'blur' }
                ],
                ngjm: [
                    { required: true, message: '请输入拟杆菌门', trigger: 'blur' }
                ],
                hbjm: [
                    { required: true, message: '请输入厚壁菌门', trigger: 'blur' }
                ],
                bxjm: [
                    { required: true, message: '请输入变形菌门', trigger: 'blur' }
                ],
                sgjm: [
                    { required: true, message: '请输入梭杆菌门', trigger: 'blur' }
                ],
                fxjm: [
                    { required: true, message: '请输入放线菌门', trigger: 'blur' }
                ],
                hbngjm: [
                    { required: true, message: '请输入厚壁菌门/拟杆菌门', trigger: 'blur' }
                ],
                lsbrsjs: [
                    { required: true, message: '请输入罗斯拜瑞氏菌属', trigger: 'blur' }
                ],
                rnsjs: [
                    { required: true, message: '请输入柔嫩梭菌属', trigger: 'blur' }
                ],
                rsgjs: [
                    { required: true, message: '请输入乳酸杆菌属', trigger: 'blur' }
                ],
                akmjs: [
                    { required: true, message: '请输入阿克曼氏菌属', trigger: 'blur' }
                ],
                zgjs: [
                    { required: true, message: '请输入真杆菌属', trigger: 'blur' }
                ],
                wrsqjs: [
                    { required: true, message: '请输入韦荣氏球菌属', trigger: 'blur' }
                ],
                tlgjs: [
                    { required: true, message: '请输入脱硫弧菌属', trigger: 'blur' }
                ],
                desjs: [
                    { required: true, message: '请输入多尔氏菌属', trigger: 'blur' }
                ],
                wqgjs: [
                    { required: true, message: '请输入弯曲杆菌属', trigger: 'blur' }
                ],
                crngj: [
                    { required: true, message: '请输入脆弱拟杆菌', trigger: 'blur' }
                ],
                jdlssj: [
                    { required: true, message: '请输入胶胨罗斯氏菌', trigger: 'blur' }
                ],
                flgsxgj: [
                    { required: true, message: '请输入副流感嗜血杆菌', trigger: 'blur' }
                ],
                whnssqj: [
                    { required: true, message: '请输入微黄奈瑟氏球菌', trigger: 'blur' }
                ],
                bxlqj: [
                    { required: true, message: '请输入表兄链球菌', trigger: 'blur' }
                ],
                wssB1: [
                    { required: true, message: '请输入维生素B1', trigger: 'blur' }
                ],
                wssB2: [
                    { required: true, message: '请输入维生素B2', trigger: 'blur' }
                ],
                wssB3: [
                    { required: true, message: '请输入维生素B3', trigger: 'blur' }
                ],
                wssB5: [
                    { required: true, message: '请输入"维生素B5', trigger: 'blur' }
                ],
                wssB6: [
                    { required: true, message: '请输入维生素B6', trigger: 'blur' }
                ],
                wssB7: [
                    { required: true, message: '请输入维生素B7', trigger: 'blur' }
                ],
                wssB9: [
                    { required: true, message: '请输入维生素B9', trigger: 'blur' }
                ],
                lgc: [
                    { required: true, message: '请输入类固醇', trigger: 'blur' }
                ],
                dj: [
                    { required: true, message: '请输入胆碱', trigger: 'blur' }
                ],
                fmQ: [
                    { required: true, message: '请输入辅酶Q', trigger: 'blur' }
                ],
                dzs: [
                    { required: true, message: '请输入胆汁酸', trigger: 'blur' }
                ]
            }
        }
    },
    created() {},
    methods: {
        add() {
            this.$refs.addFormRef.validate(async valid => {
                if (!valid) {
                    return this.$message.error('请填写必要的表单项！')
                }
                
                // 发起请求添加商品
                // 商品的名称，必须是唯一的
                const { data: res } = await this.$http.post('goods', addForm)

                if (res.meta.status !== 201) {
                    return this.$message.error('添加数据失败！')
                }

                this.$message.success('添数据成功！')
                this.$router.push('/data')
            })
        }
    }
}
</script>

<style lang="less" scoped>
</style>