import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

         import users from '@/views/modules/users/list'
        import dictionary from '@/views/modules/dictionary/list'
        import exampaper from '@/views/modules/exampaper/list'
        import examquestion from '@/views/modules/examquestion/list'
        import examrecord from '@/views/modules/examrecord/list'
        import examredetails from '@/views/modules/examredetails/list'
        import examrewrongquestion from '@/views/modules/examrewrongquestion/list'
        import forum from '@/views/modules/forum/list'
        import jiaoan from '@/views/modules/jiaoan/list'
        import jiaoanCollection from '@/views/modules/jiaoanCollection/list'
        import jiaoanLiuyan from '@/views/modules/jiaoanLiuyan/list'
        import laoshi from '@/views/modules/laoshi/list'
        import liku from '@/views/modules/liku/list'
        import likuCollection from '@/views/modules/likuCollection/list'
        import likuLiuyan from '@/views/modules/likuLiuyan/list'
        import shipin from '@/views/modules/shipin/list'
        import shipinCollection from '@/views/modules/shipinCollection/list'
        import shipinLiuyan from '@/views/modules/shipinLiuyan/list'
        import yonghu from '@/views/modules/yonghu/list'
        import config from '@/views/modules/config/list'
        import dictionaryBanji from '@/views/modules/dictionaryBanji/list'
        import dictionaryExampaper from '@/views/modules/dictionaryExampaper/list'
        import dictionaryExamquestion from '@/views/modules/dictionaryExamquestion/list'
        import dictionaryForum from '@/views/modules/dictionaryForum/list'
        import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
        import dictionaryJiaoan from '@/views/modules/dictionaryJiaoan/list'
        import dictionaryJiaoanCollection from '@/views/modules/dictionaryJiaoanCollection/list'
        import dictionaryLiku from '@/views/modules/dictionaryLiku/list'
        import dictionaryLikuCollection from '@/views/modules/dictionaryLikuCollection/list'
        import dictionarySex from '@/views/modules/dictionarySex/list'
        import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
        import dictionaryShipin from '@/views/modules/dictionaryShipin/list'
        import dictionaryShipinCollection from '@/views/modules/dictionaryShipinCollection/list'

import adminexam from '@/views/modules/exampaper/exam'




//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
	  ,{
	      path: '/adminexam',
	      name: 'adminexam',
	      component: adminexam,
	      meta: {icon:'', title:'adminexam'}
	    }
    ,{
        path: '/dictionaryBanji',
        name: '班级类型名称',
        component: dictionaryBanji
    }
    ,{
        path: '/dictionaryExampaper',
        name: '试卷状态',
        component: dictionaryExampaper
    }
    ,{
        path: '/dictionaryExamquestion',
        name: '试题类型',
        component: dictionaryExamquestion
    }
    ,{
        path: '/dictionaryForum',
        name: '帖子类型名称',
        component: dictionaryForum
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryJiaoan',
        name: '教案类型名称',
        component: dictionaryJiaoan
    }
    ,{
        path: '/dictionaryJiaoanCollection',
        name: '收藏表类型',
        component: dictionaryJiaoanCollection
    }
    ,{
        path: '/dictionaryLiku',
        name: '案例库类型名称',
        component: dictionaryLiku
    }
    ,{
        path: '/dictionaryLikuCollection',
        name: '收藏表类型',
        component: dictionaryLikuCollection
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型名称',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架名称',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryShipin',
        name: '视频类型名称',
        component: dictionaryShipin
    }
    ,{
        path: '/dictionaryShipinCollection',
        name: '收藏表类型',
        component: dictionaryShipinCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/exampaper',
        name: '试卷表',
        component: exampaper
      }
    ,{
        path: '/examquestion',
        name: '试题表',
        component: examquestion
      }
    ,{
        path: '/examrecord',
        name: '考试记录表',
        component: examrecord
      }
    ,{
        path: '/examredetails',
        name: '答题详情表',
        component: examredetails
      }
    ,{
        path: '/examrewrongquestion',
        name: '错题表',
        component: examrewrongquestion
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/jiaoan',
        name: '教案',
        component: jiaoan
      }
    ,{
        path: '/jiaoanCollection',
        name: '教案收藏',
        component: jiaoanCollection
      }
    ,{
        path: '/jiaoanLiuyan',
        name: '教案留言',
        component: jiaoanLiuyan
      }
    ,{
        path: '/laoshi',
        name: '教师',
        component: laoshi
      }
    ,{
        path: '/liku',
        name: '案例库',
        component: liku
      }
    ,{
        path: '/likuCollection',
        name: '案例库收藏',
        component: likuCollection
      }
    ,{
        path: '/likuLiuyan',
        name: '案例库留言',
        component: likuLiuyan
      }
    ,{
        path: '/shipin',
        name: '视频',
        component: shipin
      }
    ,{
        path: '/shipinCollection',
        name: '视频收藏',
        component: shipinCollection
      }
    ,{
        path: '/shipinLiuyan',
        name: '视频留言',
        component: shipinLiuyan
      }
    ,{
        path: '/yonghu',
        name: '学生',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
