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
            <!--<el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-menu-item-group>
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
            </el-menu-item>-->

            <template v-for="item in permission_routes" v-if="!item.hidden">
                <template v-if="item.children && item.children.length === 1 && !item.hidden">
                    <el-menu-item class="">{{item.children[0].meta.title}}</el-menu-item>
                </template>

                <el-submenu v-else>
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">{{item.meta.title}}</span>
                    </template>
                    <el-menu-item-group>
                        <template v-for="child in item.children"  v-if="!child.hidden">
                            <el-menu-item class="">{{child.meta.title}}</el-menu-item>
                        </template>
                    </el-menu-item-group>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import variables from '@/styles/variables.less'

    export default {
        name: "SideBar",
        data() {
            return {
                isCollapse: false,
                childList: null
            }
        },
        computed: {
            ...mapGetters('permission', [
                'permission_routes'
            ]),
            variables() {
                return variables
            }
        },
        methods: {
            hasOneShowChildren(children, parent) {
                const showChildren = children.filter(item => {
                    if (item.hidden) {
                        return false
                    } else {
                        this.childList = item
                        return true
                    }
                })

                if (showChildren.length === 1) {
                    return true
                }

                if (showChildren.length === 0) {
                    this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
                    return true
                }

                return false
            }
        }
    }
</script>

<style scoped lang="less">

</style>
