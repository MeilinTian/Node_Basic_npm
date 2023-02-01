$(function() {
    // 点击去注册账号的链接
    $('#link_reg').on('click', function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    // 点击去登录的链接
    $('#link_login').on('click', function() {
        $('.reg-box').hide()
        $('.login-box').show()
    })

    // 从 layui 中获取 form 对象
    let form = layui.form
    let layer = layui.layer

    // 通过 form.verify() 自定义校验规则
    form.verify({
        // 自定义了一个叫 pwd 的校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        // 校验两次密码是否一致
        repwd: function(value) {
            // 通过形参拿到的是 确认密码框的内容
            // 还需要拿到密码框中的内容
            // 然后进行一次等于的判断
            // 如果判断失败，return 一个错误的提示消息即可
            let pwd = $('.reg-box [name=password]').val()
            if (value !== pwd) { return '两次密码不一致' }
        }
    })

    // 监听表单注册的其他事件
    $('#form_reg').on('submit', function(e) {
        e.preventDefault()
        let data = {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val()
        }
        $.post('/api/reguser', data, function(res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            console.log('注册成功！')
        })
    })

    // 监听登录表单的提交事件
    $('#form_login').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            url: '/api/login',
            method: 'POST',
            // 快速获取表单中的数据
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('登录失败！')
                }
                layer.msg('登录成功！')

                // 将 token 保存到 localStorage 中
                localStorage.setItem('token', res.token)

                // 跳转到后台主页
                location.href = './index.html'
            }
        })
    })
})