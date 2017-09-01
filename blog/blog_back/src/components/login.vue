<template>
  <div class="login">
        <div class="content">
            <h2>
                个人博客:
            </h2>
            <p v-focus:test="loginname">
                <latel>账号：</latel>
                <input type="text" placeholder="请输入账号/手机号" v-model.lazy="loginname.val">
                 <i style="color:red;display:none">{{loginname.msg}}</i>
            </p>
            <p v-focus:required="loginpw">
                <latel>密码:</latel>
                <input type="password" placeholder="请输入密码" v-model.lazy="loginpw.val">
                <i style="color:red;display:none">{{loginpw.msg}}</i>
            </p>
            <div>
                <button @click="login">
                    登录
                </button>
            </div>
        </div>
  </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                loginname: {
                    val: "",
                    msgread: "您输入的姓名不符合中文格式",
                    msg: "您输入的姓名不符合中文格式",
                    test: /^[a-zA-z]+$/
                },
                // phonedata: {
                //     val: "",
                //     msgread: "您输入的手机号格式不对",
                //     msg: "您输入的手机号格式不对",
                //     blur: false,
                //     test: /^1[3|4|5|8][0-9]\d{4,8}$/
                // },
                loginpw: {
                    val: "",
                    msgread: "您输入的密码格式不对",
                    blur: false,
                    msg: "您输入的密码格式不对",
                    test: /^1[3|4|5|8][0-9]\d{4,8}$/
                }
            }
        },
        methods: {
            login() {
                this.axios.post("/api/back/login", {
                    params: {
                        loginname: this.loginname,
                        loginpw: this.loginpw
                    }
                }).then(function(data) {
                    console.log(data)
                })
            }
        },
        directives: {
            focus: {

                componentUpdated(el, option, vnode, oldVnode) {

                    var $p = el.getElementsByTagName("i")[0]
                    var $testState = option.value.test.test(option.value.val)


                    if (option.value.val != "") {
                        if ($testState) {
                            $p.style.display = "none"
                        } else {
                            $p.style.display = "block"
                        }
                        option.value.msg = option.oldValue.msgread
                    } else {
                        if (option.arg == "required" && option.value.blur) {
                            $p.style.display = "block"
                            option.value.msg = "不能为空"
                        } else {
                            $p.style.display = "none"
                        }

                    }
                }

            }

        }
    }
</script>

<style scoped>
    .login {
        width: 100%;
        height: 600px;
    }
    
    .content {
        width: 400px;
        height: 400px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -200px;
        margin-left: -200px;
        border: 1px #ef5b00 solid;
    }
    
    .content h2 {
        color: #ef5b00;
        line-height: 85px;
        padding-left: 30px;
    }
    
    .content p {
        border: 1px solid #ccc;
        width: 300px;
        margin-left: 50px;
        height: 45px;
        margin-top: 25px;
        padding: 0 10px;
        box-sizing: border-box;
        line-height: 45px;
    }
    
    .content p input {
        border: none;
        outline: none;
    }
    
    .content div {
        width: 300px;
        margin-left: 50px;
        height: 45px;
        margin-top: 35px;
        box-sizing: border-box;
        line-height: 45px;
    }
    
    .content div button {
        width: 300px;
        height: 45px;
        background: #ef5b00;
        border: none;
        color: #fff;
        outline: none;
    }
</style>