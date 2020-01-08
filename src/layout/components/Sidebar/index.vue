<template>
    <div :style="{width:  isCollapse ? '64px' : '212px' }">
        <el-menu default-active="1-4-1"
                 :background-color="variables.menuBg"
                 :text-color="variables.menuText"
                 :unique-opened="false"
                 :active-text-color="variables.menuActiveText"
                 :collapse-transition="false"
                 mode="vertical"
                 :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import variables from '@/styles/variables.less'

    export default {
        name: "SideBar",
        data() {
            return {
                isCollapse: false
            }
        },
        computed: {
            variables() {
                return variables
            }
        },
        methods: {}
    }
</script>

<style scoped lang="less">

</style>
