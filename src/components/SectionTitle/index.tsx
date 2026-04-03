interface SectionTitleProps {
    title: string
    position?: 'left' | 'center' | 'right'
}

const titlePosition: {
    left: string
    center: string
    right: string
} = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
}

export default function SectionTitle({title, position = 'center'}: SectionTitleProps) {
  return (
    <h2 className={`${titlePosition[position]} text-3xl mb-10`}>{title}</h2>
  )
}