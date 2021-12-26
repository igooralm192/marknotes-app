import React from 'react'

type FCProps<T> = T
type RefFCProps<T, P> = T & React.RefAttributes<P> & { isRef?: boolean }

type FC<T> = React.FC<FCProps<T>>
type RefFC<T, P> = React.ForwardRefExoticComponent<RefFCProps<T, P>>

function haveRef<T, P>(
  Component: FC<T> | RefFC<T, P>,
): Component is RefFC<T, P> {
  return (
    (Component as RefFC<T, P>)?.$$typeof?.toString() ===
    'Symbol(react.forward_ref)'
  )
}

// Functional Component without 'ref'
export function styled<T>(
  Component: FC<T>,
  props?: Partial<FCProps<T>>,
): (newProps: FCProps<T>) => React.FunctionComponentElement<T>

// Functional Component with 'ref'
export function styled<T, P>(
  Component: RefFC<T, P>,
  props?: Partial<RefFCProps<T, P>>,
): (newProps: RefFCProps<T, P>) => React.FunctionComponentElement<T>

export function styled<T, P>(
  Component: FC<T> | RefFC<T, P>,
  props?: Partial<FCProps<T>> | Partial<RefFCProps<T, P>>,
) {
  if (haveRef(Component)) {
    return styledRefFC<T, P>(Component as RefFC<T, P>, props)
  } else {
    return styledFC<T>(Component as FC<T>, props)
  }
}

function styledFC<T>(Component: FC<T>, props?: Partial<FCProps<T>>) {
  return function (newProps: FCProps<T>) {
    return React.createElement(Component, {
      ...props,
      ...newProps,
    })
  }
}

function styledRefFC<T, P>(
  Component: RefFC<T, P>,
  props?: Partial<RefFCProps<T, P>>,
) {
  function NewComponent(newProps: T, ref: React.ForwardedRef<P>) {
    return React.createElement<T>(Component, { ...props, ...newProps, ref })
  }

  return React.forwardRef(NewComponent)
}
