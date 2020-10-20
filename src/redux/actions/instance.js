import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com",
});

export default instance;

/* backend urls
  path('admin/', admin.site.urls),
  path('login/', UserLoginAPIView.as_view(), name='login'),
  path('signup/', UserCreateAPIView.as_view(), name='register'),
  path('channels/', include('my_messages.urls')),
  path('shutuuuuuuup/', deleteTheHamza, name="shutup")
  
  path('', ChannelListAPIView.as_view(), name='channel-list'),
  path('create/', ChannelCreateAPIView.as_view(), name='channel-create'),
  path('<int:channel_id>/', MessageListView.as_view(), name='message-list'),
  path('<int:channel_id>/send/',
         MessageCreateView.as_view(), name='message-create'),
*/
