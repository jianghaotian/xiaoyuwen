<template>
    <div class="home">
        <el-container>
            <!-- header -->
            <el-header height="70px">
                <Header/>
            </el-header>
            <!-- container -->
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';


export default {
    name: 'home',
    components: {
        Header,


    }
}
</script>

<style scoped>
.home {
    width: 100%;
    height: 100%;
}
.el-container {
    width: 100%;
    height: 100%;
}
  
.el-aside,
.el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 20px;
}
.el-aside {
    padding-right: 10px;
}
.el-main {
    padding-left: 10px;
}

</style>
