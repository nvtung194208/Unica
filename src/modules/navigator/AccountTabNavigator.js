export default function AccountTabNavigator(props) {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <Text style={{fontSize: 20, color: 'black'}}>AccountScreen</Text>

        <View>
          <TouchableOpacity style={{height: 40}}>
            <Text style={{fontSize: 14, color: 'black'}}>Cập nhật hồ sơ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height: 40}}>
            <Text style={{fontSize: 14, color: 'black'}}>Đổi mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height: 40}}>
            <Text style={{fontSize: 14, color: 'black'}}>
              Hộp thư thông báo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height: 40}}>
            <Text style={{fontSize: 14, color: 'black'}}>Lộ trình học tập</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height: 40}}>
            <Text style={{fontSize: 14, color: 'black'}}>
              Hỗ trợ khách hàng
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height: 40}}>
            <Text style={{fontSize: 14, color: 'black'}}>
              Đánh giá ứng dụng
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
