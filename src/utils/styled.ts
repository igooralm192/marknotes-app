import React from 'react'

type FCProps<T> = T
type RefFCProps<T, P> = React.PropsWithoutRef<T> & React.RefAttributes<P>

type FC<T> = React.FC<FCProps<T>>
type RefFC<T, P> = React.ForwardRefExoticComponent<RefFCProps<T, P>>

type StyledAttrs<T> = Partial<T> | ((props: T) => Partial<T>)

type StyledFCAttrs<T> = StyledAttrs<FCProps<T>>
type StyledRefFCAttrs<T, P> = StyledAttrs<RefFCProps<T, P>>

function haveRef<T, P>(
  Component: FC<T> | RefFC<T, P>,
): Component is RefFC<T, P> {
  return (
    (Component as RefFC<T, P>)?.$$typeof?.toString() ===
    'Symbol(react.forward_ref)'
  )
}

function computeAttrs<T>(props: T, attrs?: StyledAttrs<T>) {
  let computedAttrs: Partial<T>

  if (typeof attrs === 'function') {
    computedAttrs = attrs(props)
  } else {
    computedAttrs = attrs ?? {}
  }

  return computedAttrs
}

// Functional Component without 'ref'
export function styled<T>(Component: FC<T>, attrs?: StyledFCAttrs<T>): FC<T>

// Functional Component with 'ref'
export function styled<T, P>(
  Component: RefFC<T, P>,
  attrs?: StyledRefFCAttrs<T, P>,
): RefFC<T, P>

export function styled<T, P>(
  Component: FC<T> | RefFC<T, P>,
  attrs?: StyledFCAttrs<T> | StyledRefFCAttrs<T, P>,
) {
  if (haveRef(Component)) {
    return styledRefFC<T, P>(
      Component as RefFC<T, P>,
      attrs as StyledRefFCAttrs<T, P>,
    )
  } else {
    return styledFC<T>(Component as FC<T>, attrs as StyledFCAttrs<T>)
  }
}

function styledFC<T>(Component: FC<T>, attrs?: StyledFCAttrs<T>) {
  return function (props: FCProps<T>) {
    const computedAttrs = computeAttrs<FCProps<T>>(props, attrs)

    return React.createElement(Component, {
      ...computedAttrs,
      ...props,
    })
  }
}

function styledRefFC<T, P>(
  Component: RefFC<T, P>,
  attrs?: StyledRefFCAttrs<T, P>,
) {
  function NewComponent(
    props: React.PropsWithChildren<T>,
    ref: React.ForwardedRef<P>,
  ) {
    const computedAttrs = computeAttrs<RefFCProps<T, P>>(props, attrs)

    return React.createElement(Component, {
      ...computedAttrs,
      ...props,
      ref,
    })
  }

  return React.forwardRef(NewComponent)
}
