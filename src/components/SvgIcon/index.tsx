import { useMemo } from "react"

type PropsType = {
    name: string,
    size?: string,
    color?: string,
    profix?: string
}

export default function SvgIcon(props: PropsType) {

    // 设置可选项的默认值
    const size = props.size ?? '36px'
    const color = props.color ?? '#fff'
    const profix = props.profix ?? 'icon'

    const iconName = useMemo(() => {
        return `#${profix}-${props.name}`
    }, [profix, props.name])

  return (
    <>
        <svg style={{height: size, width: size }}>
            <use xlinkHref={iconName} fill={color} />
        </svg>
    </>
  )
}
