export default {
    type(event) {
        if (event.target.id == "name") {
            var state = /^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/.test(event.target.value)
            if (state) {
                this.formHandle(event)
            } else {
                alert("格式不正确")
            }
        }
        if (event.target.id == "age") {
            var state = /^[0-9]*$/.test(event.target.value)
            if (state) {
                this.formHandle(event)
            } else {
                alert("格式不正确")
            }
        }

    },
    formHandle(event) {
        this.setState({
            [event.target.id]: event.target.value
        })

    },
    submit() {
        if (this.state.name && this.state.age) {
            alert("提交成功")
        } else {
            alert("请输入内容")
        }
    }
}