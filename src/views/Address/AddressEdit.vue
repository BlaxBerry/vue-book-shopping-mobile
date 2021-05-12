<template>
  <div id="addressEdit">
    <!-- 添加/编辑地址 -->
    <!-- 标题栏 -->
    <HeaderBar></HeaderBar>


    <van-address-edit
        :area-list="areaList"
        :show-postal="true"
        :show-delete="typeIsEdit"
        :show-set-default="true"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        :address-info="addressInfo"
        @save="onSave"
        @delete="onDelete"
    />


  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"
//Vant 官方提供了一份默认的省市区数据
import { areaList } from '@vant/area-data';

// 导入 api接口
import {
  // 获取当前地址的信息
  GetAddressDetail,  
  // 添加地址
  AddUserAddress,
  // 编辑地址
  EditAddress,
  // 删除地址
  DeleteAddress

} from "@/network/api.js"

export default {
    data() {
        return {
          // VantUI自带 中国县市区地名
          areaList:areaList,

          // 删除按钮显示/隐藏
          typeIsEdit:true,

          // VantUI 自带的默认参数，表单内容的初始值
          // 修改时自动充填表格的初始默认内容
          addressInfo:{}
        }
    },

    methods: {
        // VantUI 自带 保存表单数据
        onSave(content) {
            // VantUI默认参数content 对象形式获得输入的内容
            // console.log("添加的地址",content);
            let params = {
                  name: content.name,
                  phone:content.tel,
                  province:content.province,
                  city:content.city,
                  county:content.county,
                  address:content.addressDetail,
                  is_default:content.isDefault ? 1 : 0
                  }

            if(this.$route.query.type == "add"){
                // 发送添加地址请求
                AddUserAddress(params).then(res=>{
                    console.log(res);
                    // 提示消息
                    this.$toast.loading({
                    message: '添加成功...',
                    forbidClick: true,
                    });
                    // 跳转页面
                    setTimeout(()=>{
                      this.$router.go(-1)
                    },1000)
                })
            }else if(this.$route.query.type == "edit"){
                // 发送修改请求
                EditAddress(this.$route.query.addressId, params).then(res=>{
                  // console.log(res);
                    // 提示消息
                    this.$toast.loading({
                    message: '修改成功...',
                    forbidClick: true,
                    });
                    // 跳转页面
                    setTimeout(()=>{
                      this.$router.go(-1)
                    },1000)
                })
            }
        },

        // 删除表单 
        onDelete() {
            // 发送删除地址请求
            DeleteAddress(this.$route.query.addressId)
          
            // 提示消息
            this.$toast.loading({
            message: '删除成功...',
            forbidClick: true,
            });

            // 跳转页面
            setTimeout(()=>{
              this.$router.go(-1)
            },1000)

        },

    },

    components:{
        HeaderBar
    },

    created(){
      // console.log(areaList);
      // VantUI 提供的区地址域数据
      this.city_list = areaList.city_list
      this.county_list = areaList.county_list
      this.province_list = areaList.province_list
      // console.log(this.province_list);
      
      // 判断路由地址中参数type 是 add 还是 edit，来决定是否添加删除按钮
      this.typeIsEdit = (this.$route.query.type == "edit")?true:false;

      // 判断是否在 type是否是 edit
      if(this.$route.query.type == 'edit'){
          GetAddressDetail(this.$route.query.addressId).then(res=>{
              console.log(res);
              console.log(this.addressInfo);

              // VantUI 自带的默认参数，表单内容的初始值
              this.addressInfo = {
                  id: res.id,
                  name: res.name,
                  tel: res.phone,
                  province:res.province,
                  city:res.city,
                  country:res.country,
                  addressDetail:res.address,
                  isDefault: res.is_default?true:false,
              }
              // console.log(this.addressInfo);
          }
      )
      }
      
    }
}
</script>

<style lang="less" scoped>
#addressEdit {
  padding-top: 50px;
}
</style>