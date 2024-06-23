// src/components/testimonials/TestimonialCard.tsx
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import { Card, CardContent } from "../ui/card"

interface TestimonialCardProps {
  content: string
  author: string
  role: string
  avatarSrc: string
}

export function TestimonialCard({ content, author, role, avatarSrc }: TestimonialCardProps) {
  return (
    <Card className="bg-white text-gray-800">
      <CardContent className="p-6 space-y-4">
        <p className="text-lg">{content}</p>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={avatarSrc} />
            <AvatarFallback>{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{author}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}