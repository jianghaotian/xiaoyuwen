<template>
    <div class="header">
        <!-- left -->
        <div class="left">
            <div class="title">小语文后台管理系统</div>
        </div>
        <!-- right -->
        <div class="right">
            <!-- date -->
            <div class="date">
                <i class="el-icon-date"></i>  
                <span class="now-date">{{ date }}</span>
            </div>
            <!-- user -->
            <div class="user">
                <i class="el-icon-s-custom"></i>
                <span class="user-name">{{ user }}</span>
            </div>
        </div>
    </div>
</template>

<script>
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate(); 
var date = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

export default {
    name: 'Header',
    data() {
        return {
            date: date,
            user: 'admin'
            
        }
    }
}
</script>

<style scoped>
i {
    font-size: 24px;
}
.header {
    height: 70px;

    background-color: #fff;

}
.left {
    float: left;

}
.title {
    height: 70px;
    line-height: 70px;
    color: #617ca6;
    font-size: 20px;
    font-weight: bold;

}
.right {
    float: right;
    height: 70px;
    line-height: 70px;

    width: 350px;
    
}
.date {
    float: left;
    width: 150px;
    /* background-color: red; */
}
.user {
    float: right;
    width: 200px;
    /* background-color: blue; */
}
.now-date,
.user-name {
    margin-left: 10px;
}
</style>
