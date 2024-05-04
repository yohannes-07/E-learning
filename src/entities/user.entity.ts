import { ERole } from 'src/auth/dtos/role.enum';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AnswerAnalyze } from './answer-analyze.entity';
import { Article } from './article.entity';
import { Comment } from './comment.entity';
import { CourseGroup } from './course-group.entity';
import { CourseReview } from './course-review.entity';
import { Course } from './course.entity';
import { ExamReview } from './exam-review.entity';
import { Exam } from './exam.entity';
import { FlashcardGroup } from './flashcard-group.entity';
import { Notification } from './notification.entity';
import { UserCourse } from './user-course.entity';
import { UserCourseUnit } from './user-courseunit.entity';
import { UserExam } from './user-exam.entity';
import { UserExercise } from './user-exercise.entity';
import { UserLesson } from './user-lesson.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true })
  email: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  firstName: string;

  @Column('varchar')
  lastName: string;

  @Column('varchar')
  phoneNumber: string;

  @Column('int', { default: 0 })
  EXP: number;

  @Column('varchar', { nullable: true })
  avatar?: string;

  @Column({
    type: 'enum',
    enum: ERole,
    default: ERole.STUDENT,
  })
  role: ERole;

  @Column('boolean', { default: false })
  isVerify: boolean;

  @OneToMany(() => Course, (course) => course.teacher)
  courses: Course[];

  @OneToMany(() => Exam, (exam) => exam.author)
  exams: Exam[];

  @OneToMany(() => CourseReview, (courseReview) => courseReview.author)
  courseReviews: CourseReview[];

  @OneToMany(() => ExamReview, (examReview) => examReview.author)
  examReviews: ExamReview[];

  @OneToMany(() => Article, (article) => article.author)
  articles: Article[];

  @OneToMany(() => Comment, (comment) => comment.author)
  comments: Comment[];

  @OneToMany(() => UserCourse, (userCourse) => userCourse.user)
  userCourses: UserCourse[];

  @OneToMany(() => UserCourseUnit, (userCourseUnit) => userCourseUnit.user)
  userCourseUnits: UserCourseUnit[];

  @OneToMany(() => UserLesson, (userLesson) => userLesson.user)
  userLessons: UserLesson[];

  @OneToMany(() => UserExercise, (userExercise) => userExercise.user)
  userExercises: UserExercise[];

  @OneToMany(() => UserExam, (userExam) => userExam.user)
  userExams: UserExam[];

  @OneToMany(() => AnswerAnalyze, (answerAnalyze) => answerAnalyze.author)
  answerAnalyzes: AnswerAnalyze[];

  @OneToMany(() => Notification, (notification) => notification.from)
  notificationsFrom: Notification[];

  @OneToMany(() => Notification, (notification) => notification.to)
  notificationsTo: Notification[];

  @OneToMany(() => FlashcardGroup, (flashcardGroup) => flashcardGroup.author)
  flashcardGroups: FlashcardGroup[];

  @OneToMany(() => CourseGroup, (courseGroup) => courseGroup.author)
  courseGroups: CourseGroup[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
