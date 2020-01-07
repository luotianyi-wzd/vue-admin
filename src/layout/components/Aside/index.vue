<template>
    <div class="aside">
        <div>
            <logo v-if="showLogo" :collapse="isCollapse"/>
            <el-scrollbar wrap-class="scrollbar-wrapper">
               <!-- <el-menu
                        :default-active="activeMenu"
                        :collapse="isCollapse"
                        :background-color="variables.menuBg"
                        :text-color="variables.menuText"
                        :unique-opened="false"
                        :active-text-color="variables.menuActiveText"
                        :collapse-transition="false"
                        mode="vertical"
                >
                    <side-item v-for="route in permission_routes" :key="route.path" :item="route"
                               :base-path="route.path"/>
                </el-menu>-->
                <side-item />
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import variables from '@/styles/variables.less'
    import SideItem from './SideItem'

    export default {
        name: "index",
        data() {
            return {
                showLogo: false,
                isCollapse: true
            }
        },
        components: {
            SideItem
        },
        computed: {
            ...mapGetters('permission', [
                'permission_routes'
            ]),
            variables() {
                return variables
            },
            activeMenu() {
                const route = this.$route
                const {meta, path} = route
                if (meta.activeMenu) {
                    return meta.activemenu
                }
                return path
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
