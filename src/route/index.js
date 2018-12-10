import React from 'react'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../store/index.js'
import App from '../App.js'
import Index from '../components/index/index.js'
import Page from '../components/pages/page.js'
import Category from '../components/category/category.js'
import Message from '../components/message/message.js'
import User from '../components/user/user.js'
import Cart from '../components/cart/cart.js'
import Message_list from'../components/message_list/message_list.js'
import Topic from '../components/detail/top.js'import Item from '../components/detail/item.js'import Progroup from '../components/productgroup/productgroup.js'var router = (
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route path="/pages" render={()=>
						<Page>
							<Switch>
								<Route path="/pages/index" component={Index}></Route>
								<Route path="/pages/productGroups/:groupid" component={Progroup}></Route>
								<Redirect from="/pages" to="/pages/index"></Redirect>
							</Switch>
						</Page>
					}></Route>
					<Route path="/category" render={()=>
						<Category></Category>
					}></Route>
					<Route path="/cart" render={()=>
						<Cart></Cart>
					}></Route>
					<Route path="/message" render={()=>
						<Message></Message>
					}></Route>
					<Route path="/user" render={()=>
						<User></User>
					}></Route>
					<Route path="/topic/:topid" component={Topic}></Route>
					<Route path="/item/:itemid" component={Item}></Route>
					<Redirect from="/" to="/pages" ></Redirect>
				</Switch>
			</App>
		</Router>
	</Provider>
	)
export default router;