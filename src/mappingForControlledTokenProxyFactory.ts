import {
    ProxyCreated,
  } from '../generated/ControlledTokenProxyFactory_v3_0_1/ControlledTokenProxyFactory'
  
import {
    ControlledToken as ControlledTokenTemplate,
} from '../generated/templates'
 
export function handleProxyCreated(event: ProxyCreated): void {
    ControlledTokenTemplate.create(event.params.proxy)
}
  