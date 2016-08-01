
# Stack

An experimental stack for single page apps

so far we have:

* typescript
* webpack + hot reload
* react
* redux + redux-saga
* bourbon + sass + postcss + css modules
* websocket connection to api server
* server can listen to and fire redux actions

### Todo:

#### Front-end:

- GraphQL + [cashay](https://github.com/mattkrick/cashay)

#### Back-end:

use [msgpack](http://msgpack.org/) to compress websocket messages

write graphql api server in haskell, using Yesod [Persistent](http://www.yesodweb.com/book/persistent) and [Haxl](https://github.com/facebook/Haxl)

resources:
- [graphql server using haxl](https://github.com/dropbox/datagraph)
- [great haxl examples](https://github.com/simonmar/haskell-eXchange-2015)

maybe if im feeling lucky.. I could use [glue](https://hackage.haskell.org/package/glue-core-0.4.5) to do cross request batching 

#### Database:

- Postgres (in a container)

#### Other

- [prerender](https://github.com/prerender/prerender) prerender the site for speed?
